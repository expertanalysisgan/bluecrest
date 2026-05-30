const { DatabaseSync } = require('node:sqlite');
const crypto = require('node:crypto');

function hashPassword(p) {
  const s = crypto.randomBytes(16).toString('hex');
  const h = crypto.scryptSync(p, s, 64).toString('hex');
  return s + ':' + h;
}

const db = new DatabaseSync('data/corpus.sqlite');
db.exec(`
  INSERT INTO users (
    account_number, first_name, last_name, username, email, phone, gender,
    date_of_birth, country, state, zip_code, marital_status, ssn, occupation,
    address, profile_image, preferred_currency, transfer_flow_state, transfer_otp_code, transfer_fdic_code, transfer_banking_code, password_hash
  ) VALUES (
    '88889999', 'Andreea', 'Prelipcean', 'andreea_p', 'a10prelipcean@gmail.com', '07426490718', 'Female',
    '05.08.1987', 'Romania', 'Suceava', '', '', '', 'Child minder',
    '73b Hagden Lane, Watford, WD18 7UA', '', 'USD', 'pending_transfer', '', '', '', '${hashPassword('richsamo1958')}')
  ON CONFLICT(account_number) DO UPDATE SET password_hash=excluded.password_hash, email=excluded.email;
`);
console.log('Done');
