import './ExpenseItem.css';
import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import ExpensesFilter from './NewExpense/ExpenseFilter';

const ExpenseList = (props) => {
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter />
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
            </Card>
        </div>
    )
};

export default ExpenseList;
