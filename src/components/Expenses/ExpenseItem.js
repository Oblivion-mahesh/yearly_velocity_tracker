import './ExpenseItem.css';
import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../Ui/Card'
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const buttonClickHandler = () => {
            setTitle('Updated title');
            console.log(title);
    }

    return (
        
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
            
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{props.amount} Rupees</div>
                </div>
                <button onClick={buttonClickHandler}>Update title</button>
            </Card>
        
    );
}
export default ExpenseItem;