// Importing React and the other hooks
import React, { useState } from 'react';


const TransactionForm = ({ onAddTransaction, transactionCount }) => {
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    category: '',
    date: '',
  });

  // Function to handle Entry changes in the form
  const handleEntryChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  // Function to handle adding of a new transaction
  const handleAddClick = () => {
    // Create a new transaction with a unique ID
    const numberedTransaction = { ...newTransaction, id: transactionCount + 1 };

    onAddTransaction(numberedTransaction);

    setNewTransaction({ description: '', amount: '', category: '', date: '' });
  };

  // Render the form with entry fields and a button
  return (
    <div id='formEntry'>
      <input className='formEntry'
        type="text"
        placeholder="Description"
        name="description"
        value={newTransaction.description}
        onChange={handleInputChange}
      />
      <input className='formEntry'
        type="number"
        placeholder="value"
        name="value"
        value={newTransaction.amount}
        onChange={handleInputChange}
      />
      <input className='formEntry'
        type="text"
        placeholder="Category"
        name="category"
        value={newTransaction.category}
        onChange={handleInputChange}
      />
      <input className='formentry'
        type="text"
        placeholder="Date"
        name="date"
        value={newTransaction.date}
        onChange={handleentryChange}
      />
      <button id='transactionButton' onClick={handleAddClick}>Add Transaction</button>
    </div>
  );
};

// Export the TransactionForm component
export default TransactionForm;