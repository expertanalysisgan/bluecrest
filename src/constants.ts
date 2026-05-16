/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Transaction, UserProfile, StockData } from './types';

export const USER_DATA: UserProfile = {
  surname: "Richard",
  middleName: "William",
  lastName: "O’dell",
  username: "Richard William",
  email: "richsamodell@gmail.com",
  pin: "070811",
  dob: "02 - 03 - 1958",
  phone: "07426490718",
  country: "England",
  state: "Cumbria",
  city: "Carlisle",
  balance: 565000,
  gender: "Male",
  occupation: "Retired",
  address: "29 Barnett drive seaton workington Cumbria CA 14. 1QN",
  accountNumber: "****9995",
  branchCode: "RBSUS002",
  password: "richsamo1958"
};

export const TRANSACTIONS: Transaction[] = [
  {
    id: "TXN-204881",
    name: "TechNova Ltd",
    date: "2020-01-14",
    time: "09:00",
    amount: 4850.00,
    type: 'credit',
    status: 'Completed',
    category: 'Salary'
  },
  {
    id: "TXN-204997",
    name: "Amazon Marketplace",
    date: "2020-02-03",
    time: "14:25",
    amount: 129.99,
    type: 'debit',
    status: 'Completed',
    category: 'Purchase'
  },
  {
    id: "TXN-205114",
    name: "International Wire",
    date: "2020-03-11",
    time: "11:15",
    amount: 2300.00,
    type: 'debit',
    status: 'Completed',
    category: 'Transfer'
  },
  {
    id: "TXN-205332",
    name: "Electricity Utility",
    date: "2020-04-06",
    time: "16:40",
    amount: 215.40,
    type: 'debit',
    status: 'Completed',
    category: 'Payment'
  },
  {
    id: "TXN-205781",
    name: "ATM Cash Withdrawal",
    date: "2020-05-19",
    time: "20:10",
    amount: 500.00,
    type: 'debit',
    status: 'Completed',
    category: 'Withdrawal'
  },
  {
    id: "TXN-206143",
    name: "Apple Services",
    date: "2020-06-27",
    time: "10:30",
    amount: 89.99,
    type: 'credit',
    status: 'Completed',
    category: 'Refund'
  },
  {
    id: "TXN-206544",
    name: "Vehicle Insurance",
    date: "2020-08-08",
    time: "13:45",
    amount: 740.00,
    type: 'debit',
    status: 'Completed',
    category: 'Payment'
  },
  {
    id: "TXN-206901",
    name: "Business Client",
    date: "2020-09-16",
    time: "08:20",
    amount: 6200.00,
    type: 'credit',
    status: 'Completed',
    category: 'Transfer'
  },
  {
    id: "TXN-207334",
    name: "Hilton Hotel",
    date: "2020-10-21",
    time: "19:50",
    amount: 1120.50,
    type: 'debit',
    status: 'Completed',
    category: 'Travel'
  },
  {
    id: "TXN-207998",
    name: "Year-End Bonus",
    date: "2020-12-12",
    time: "12:00",
    amount: 3500.00,
    type: 'credit',
    status: 'Completed',
    category: 'Bonus'
  }
];

export const STOCKS: StockData[] = [
  { symbol: "AAPL", name: "Apple", price: 300.23, change: 0.68 },
  { symbol: "TSLA", name: "Tesla", price: 422.24, change: -4.75 },
  { symbol: "NVDA", name: "NVIDIA", price: 225.32, change: -4.42 }
];

export const ACTIVITY_DATA = [
  { name: 'Mon', value: 25 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 35 },
  { name: 'Thu', value: 70 },
  { name: 'Fri', value: 45 },
  { name: 'Sat', value: 62 },
  { name: 'Sun', value: 55 },
];

export const PROFILE_IMAGE = "https://res.cloudinary.com/dcksy6lcp/image/upload/v1/1b2dd907c73ce868394daa1202865cbf.jpg";
