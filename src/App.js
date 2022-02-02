import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 1,
      title: 'Candy',
      cost: 67.84, 
      date: new Date(2021, 11, 31)
    },
    { id: 2,
      title: 'Table', 
      cost: 298.32, 
      date: new Date(2021, 12, 25)
    },
    { id:3, 
      title: 'Xmas Presents', 
      cost: 402.98, 
      date: new Date(2021, 13, 22)
    },
    { id:4, 
      title: 'Near Years Eve Decorations', 
      cost: 35.20, 
      date: new Date(2021, 13, 31)
    }
  ]

  return (
    <div className="container">
      <header className="App-header">
        <h1>A Simple React App</h1>
        <ExpenseItem 
          title={expenses[0].title} 
          cost={expenses[0].cost}
          date={expenses[0].date}
        />
        <ExpenseItem 
          title={expenses[1].title} 
          cost={expenses[1].cost}
          date={expenses[1].date}
        />
        <ExpenseItem 
          title={expenses[2].title} 
          cost={expenses[2].cost}
          date={expenses[2].date}
        />
        <ExpenseItem 
          title={expenses[3].title} 
          cost={expenses[3].cost}
          date={expenses[3].date}
        />
      </header>
    </div>
  );
}

export default App;
