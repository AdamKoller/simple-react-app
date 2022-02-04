import './ExpenseItem.css';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    return (
        <div>
            <ExpenseItem
                title={props.items[0].title}
                cost={props.items[0].cost}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                cost={props.items[1].cost}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                cost={props.items[2].cost}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                cost={props.items[3].cost}
                date={props.items[3].date}
            />
        </div>
    )
};

export default ExpenseList;
