// Importing React
import React from 'react';

// TransactionTable component for displaying transaction data
const TransactionTable = ({ transactions }) => (
  <table id='transactionTable'>
    <thead>
      {/* Table header row with column names */}
      <tr id='dat-row'>
        <th className='container'>ID</th>
        <th className='container'>Date</th>
        <th className='container'>Description</th>
        <th className='container'>Category</th>
        <th className='container'>Amount</th>
      </tr>
    </thead>
    <tbody id='tablebody'>
      {/* Mapping through transactions to display data in rows */}
      {transactions.map((transaction) => (
        <tr key={transaction.id} id='datacont'>
          <td className='table-data'>{transaction.id}</td>
          <td className='table-data'>{transaction.date}</td>
          <td className='table-dat'>{transaction.description}</td>
          <td className='table-data'>{transaction.category}</td>
          <td className='tabledata'>{transaction.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Export the TransactionTable component
export default TransactionTable;