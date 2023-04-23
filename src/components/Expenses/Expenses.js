import React,{useState} from 'react';
import './Expenses.css'
import Card from '../Ui/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

const Expenses = (props) =>{

      const [currentSelectedYear, setCurrentSelectedYear] = useState('2022') ;
      const yearFilterChange = (selectedYear) =>{
        console.log(selectedYear);
        setCurrentSelectedYear(selectedYear);
      };

      const filteredMap = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === currentSelectedYear;
      });

      return(
        
        <div>  
        <Card className="expenses">
        
        <ExpensesFilter onYearFilterchange={yearFilterChange} />
        <ExpensesChart expenses = {filteredMap}/>
        <ExpensesList items={filteredMap} />
        </Card>
        </div>
      );
};
export default Expenses;

