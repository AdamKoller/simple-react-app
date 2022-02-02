import './ExpenseItem.css';

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 11, 31);
  const expenseTitle = 'Candy';
  const expenseCost = 67.84;

  return (
    <div className="item">
        <h3>{expenseDate.toISOString()}</h3>
        <div className="title"><h2>{expenseTitle}</h2></div>
        <div className="cost"><h3>${expenseCost}</h3></div>
    </div>
  );
}

export default ExpenseItem;
