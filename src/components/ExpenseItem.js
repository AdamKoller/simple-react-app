import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="item">
      <div className="date">
        <div className="month">{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
      </div>
      <div className="title-cost-wrapper">
        <div className="title"><h3>{props.title}</h3></div>
        <div className="cost"><h4>${props.cost}</h4></div>
      </div>
    </div>
  );
}

export default ExpenseItem;
