import './ExpenseItem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Expenses from './Expenses';
function ExpenseItem(props) {

    return (
        <div>
            <div className="expense-item">
                <ExpenseDate date={props.date} amount ={props.amount} title={props.title}></ExpenseDate>
            
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount} Rupees</div>
                </div>
            </div>
        </div>
    );
}
export default ExpenseItem;