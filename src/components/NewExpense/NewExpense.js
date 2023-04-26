import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setNewExpense(false)
  }

  const newExpenseHandler = () => {
    setNewExpense(true)
  }

  const cancelExpenseHandler = () => {
    setNewExpense(false)
  }

  return (
    <div className='new-expense'>
      {!newExpense && <button type='submit' onClick={newExpenseHandler}>Add New Expense</button>}
      {newExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseHandler} />}
    </div>
  );
}

export default NewExpense;