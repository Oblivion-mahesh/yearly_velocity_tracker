import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
const [isediting,setIsEditng] = useState(true); 

const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData ={
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditng(true);
}; 

const startEditingHandler = () =>{
    setIsEditng(false);
};

const stopEditingHandler =() =>{
    setIsEditng(true);
};

return (
<div className='new-expense'>

    {isediting && (<button onClick={startEditingHandler} >Add Expense</button>)}

    {!isediting && (
        <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
        />
    )}

</div>
);

};

export default NewExpense;