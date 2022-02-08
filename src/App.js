import React from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
// import Card from './components/Card';
import ExpenseList from './components/ExpenseList';

function App() {
  const expenses = [
    // Data to be rendered by components (ie; title, cost, and date of the 'expenses')
    {
      id: 1,
      title: 'Candy',
      cost: 67.84,
      date: new Date(2021, 9, 31)
    },
    {
      id: 2,
      title: 'Table',
      cost: 298.32,
      date: new Date(2021, 10, 25)
    },
    {
      id: 3,
      title: 'Xmas Presents',
      cost: 402.98,
      date: new Date(2021, 11, 22)
    },
    {
      id: 4,
      title: 'Near Years Eve Decorations',
      cost: 35.29,
      date: new Date(2021, 11, 31)
    }
  ]

  // IN THE PAST, YOU NEED TO USE 'import React from "react"' WHEN USING OBJECTS LIKE SHOWN BELOW
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'A Simple React App'),
  //   React.createElement(ExpenseList, { items: expenses })
  // );

  return (
    <div className="container">
      <header className="App-header">
        <NewExpense />
        {/* the 'items' keyword will be replaced by the array 'expenses' */}
        <ExpenseList items={expenses} />
      </header>
    </div>
  );
}

export default App;
