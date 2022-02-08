import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  const [title, changeTitle] = useState(props.title);
  console.log('Evaluated by React');

  const titleChange = () => {
    changeTitle('Updated');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="title-cost-wrapper">
        <div className="title"><h3>{title}</h3></div>
        <div className="cost"><h4>${props.cost}</h4></div>
      </div>
      <button onClick={titleChange}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
