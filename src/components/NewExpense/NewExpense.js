import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  const savedExpenseHandler = (savedExpenseInput) => {
    const expenseData = {
      ...savedExpenseInput,
      id: Math.random().toString()
    };
    console.log(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm savedExpense={savedExpenseHandler} />
    </div>
  )
};

export default NewExpense;
