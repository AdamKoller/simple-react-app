import './App.css';
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

  return (
    <div className="container">
      <header className="App-header">
        <h1>A Simple React App</h1>
        {/* the 'items' keyword will be replaced by the array 'expenses' */}
        <ExpenseList items={expenses} />
      </header>
    </div>
  );
}

export default App;
