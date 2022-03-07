import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const savedExpenseHandler = (savedExpenseInput) => {
    const expenseData = {
      ...savedExpenseInput,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm savedExpense={savedExpenseHandler} />
    </div>
  )
};

export default NewExpense;
