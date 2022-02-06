import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="title-cost-wrapper">
        <div className="title"><h3>{props.title}</h3></div>
        <div className="cost"><h4>${props.cost}</h4></div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
