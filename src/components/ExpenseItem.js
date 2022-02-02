import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <div className="item">
        <h3>{props.date.toISOString()}</h3>
        <div className="title"><h2>{props.title}</h2></div>
        <div className="cost"><h3>${props.cost}</h3></div>
    </div>
  );
}

export default ExpenseItem;
