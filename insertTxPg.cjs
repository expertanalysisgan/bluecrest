const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_r1ywsmoO2lSv@ep-wild-brook-ap1ljq5f-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});

const email = 'a10prelipcean@gmail.com';

const transactions = [
  { reference_id: 'TXN-001', category: 'Deposit', type: 'credit', description: 'Business Funding', amount: 300000, status: 'Completed', date: '2026-05-10 09:00:00' },
  { reference_id: 'TXN-002', category: 'Payment', type: 'debit', description: 'Rent Payment', amount: -1500, status: 'Completed', date: '2026-05-12 10:30:00' },
  { reference_id: 'TXN-003', category: 'Purchase', type: 'debit', description: 'Supermarket Groceries', amount: -500, status: 'Completed', date: '2026-05-15 14:20:00' },
  { reference_id: 'TXN-004', category: 'Payment', type: 'debit', description: 'Electric & Gas Utility', amount: -200, status: 'Completed', date: '2026-05-18 08:45:00' },
  { reference_id: 'TXN-005', category: 'Payment', type: 'debit', description: 'Health Insurance', amount: -300, status: 'Completed', date: '2026-05-20 11:15:00' },
  { reference_id: 'TXN-006', category: 'Purchase', type: 'debit', description: 'Restaurant Dining', amount: -150, status: 'Completed', date: '2026-05-22 19:30:00' },
  { reference_id: 'TXN-007', category: 'Payment', type: 'debit', description: 'Car Loan Installment', amount: -800, status: 'Completed', date: '2026-05-25 10:00:00' },
  { reference_id: 'TXN-008', category: 'Purchase', type: 'debit', description: 'Holiday Booking', amount: -9000, status: 'Completed', date: '2026-05-26 15:45:00' },
  { reference_id: 'TXN-009', category: 'Purchase', type: 'debit', description: 'Retail Shopping', amount: -350, status: 'Completed', date: '2026-05-28 12:20:00' },
  { reference_id: 'TXN-010', category: 'Purchase', type: 'debit', description: 'Miscellaneous', amount: -200, status: 'Completed', date: '2026-05-29 09:10:00' }
];

async function updateData() {
  const client = await pool.connect();
  try {
    const userRes = await client.query('SELECT id FROM users WHERE email = $1', [email]);
    if (userRes.rows.length === 0) {
      console.log('User not found');
      return;
    }
    const userId = userRes.rows[0].id;

    await client.query('UPDATE users SET profile_image = $1, preferred_currency = $2 WHERE id = $3', ['/profile.jpg', 'GBP', userId]);
    
    await client.query('DELETE FROM transactions WHERE user_id = $1', [userId]);

    for (const tx of transactions) {
      await client.query(
        'INSERT INTO transactions (user_id, reference_id, category, type, description, amount, status, currency_code, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [userId, tx.reference_id, tx.category, tx.type, tx.description, tx.amount, tx.status, 'GBP', tx.date]
      );
    }
    console.log('Transactions inserted for PG');
  } catch (e) {
    console.error(e);
  } finally {
    client.release();
    pool.end();
  }
}

updateData();
