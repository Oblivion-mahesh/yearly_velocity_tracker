import React, {useState} from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Smartphone',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Health Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


const App = () =>{

const [expenses, setExpenses] =   useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense =>{
    setExpenses( prevExpenses => {
      return [expense, ...prevExpenses];

    });
    setExpenses([expense, ...expenses]);
    console.log("App.js");
    console.log(expense);
  };

  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses expenses={expenses}/>
    </div>
    
  );

}

export default App;
