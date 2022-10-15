import './ExpenseDate.css';
function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.toLocaleString();

    return
    <div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__month'>{day}</div>
        <div className='expense-date__month'>{year}</div>
    </div>

}

export default ExpenseDate;