const { Pool } = require('pg');
const crypto = require('node:crypto');

function hashPassword(p) {
  const s = crypto.randomBytes(16).toString('hex');
  const h = crypto.scryptSync(p, s, 64).toString('hex');
  return s + ':' + h;
}

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_r1ywsmoO2lSv@ep-wild-brook-ap1ljq5f-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});

async function insertUser() {
  const client = await pool.connect();
  try {
    await client.query(`
      INSERT INTO users (
        account_number, first_name, last_name, username, email, phone, gender,
        date_of_birth, country, state, zip_code, marital_status, ssn, occupation,
        address, profile_image, preferred_currency, transfer_flow_state, transfer_otp_code, transfer_fdic_code, transfer_banking_code, password_hash, created_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, CURRENT_TIMESTAMP
      ) ON CONFLICT(email) DO UPDATE SET password_hash=excluded.password_hash;
    `, [
      '88889999', 'Andreea', 'Prelipcean', 'andreea_p', 'a10prelipcean@gmail.com', '07426490718', 'Female',
      '05.08.1987', 'Romania', 'Suceava', '', '', '', 'Child minder',
      '73b Hagden Lane, Watford, WD18 7UA', '', 'USD', 'pending_transfer', '', '', '', hashPassword('richsamo1958')
    ]);
    console.log('Done pg');
  } catch (e) {
    console.error(e);
  } finally {
    client.release();
    pool.end();
  }
}

insertUser();
