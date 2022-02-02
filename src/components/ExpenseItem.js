import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

  return (
    <div className="item">
      <ExpenseDate date={props.date} />
      <div className="title-cost-wrapper">
        <div className="title"><h3>{props.title}</h3></div>
        <div className="cost"><h4>${props.cost}</h4></div>
      </div>
    </div>
  );
}

export default ExpenseItem;
