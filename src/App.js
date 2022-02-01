import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>A Simple React App</h1>
        {/* <button className="btn">Let's get started</button> */}
        <ExpenseItem />
      </header>
    </div>
  );
}

export default App;
