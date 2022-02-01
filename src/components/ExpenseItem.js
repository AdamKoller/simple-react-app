import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className="item">
        <h3>Date</h3>
        <div className="title"><h2>Title</h2></div>
        <div className="cost"><h3>Amount</h3></div>
    </div>
  );
}

export default ExpenseItem;
