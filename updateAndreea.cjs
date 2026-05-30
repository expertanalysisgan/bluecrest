const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync('data/corpus.sqlite');

const email = 'a10prelipcean@gmail.com';

const user = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
if (!user) {
  console.log('User not found');
  process.exit(1);
}

const userId = user.id;

// Update user profile
db.prepare('UPDATE users SET profile_image = ?, preferred_currency = ? WHERE id = ?').run('/profile.jpg', 'GBP', userId);

// Delete existing transactions for this user
db.prepare('DELETE FROM transactions WHERE user_id = ?').run(userId);

// Insert new transactions
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

const insertTx = db.prepare('INSERT INTO transactions (user_id, reference_id, category, type, description, amount, status, currency_code, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');

for (const tx of transactions) {
  insertTx.run(userId, tx.reference_id, tx.category, tx.type, tx.description, tx.amount, tx.status, 'GBP', tx.date);
}

console.log('Update successful');
