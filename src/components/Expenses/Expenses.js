import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2019');
    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }

    //filter the expenses based on year

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filterExpenses} />
            <ExpensesList items={filterExpenses} />
        </Card>
    )
}

export default Expenses