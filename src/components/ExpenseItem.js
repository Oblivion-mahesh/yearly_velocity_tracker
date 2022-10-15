import './ExpenseItem.css';
import React from 'react';
function ExpenseItem(props) {

    return (
        <div>
            <div className="expense-item">
                <ExpenseItem date={props.date} amount ={props.amount} title={props.title}/>
            
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount} Rupees</div>
                </div>
            </div>
        </div>
    );
}
export default ExpenseItem;