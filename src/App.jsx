import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseChart from './components/ExpenseChart';
import Filter from './components/Filter';
import MonthFilter from './components/MonthFilter';
import './index.css';

function App() {
    const [expenses, setExpenses] = useState(
        JSON.parse(localStorage.getItem('expenses')) || []
    );
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense) => {
        setExpenses([...expenses, { id: uuidv4(), ...expense }]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    // Filter expenses for the selected month
    const filteredExpenses = expenses.filter(expense => expense.month === selectedMonth);

    return (
        <div className="container">
            <h1>Cashlytic</h1>
            <ExpenseForm addExpense={addExpense} />
            <ExpenseTotal expenses={filteredExpenses} />
            <MonthFilter onMonthChange={setSelectedMonth} />
            <ExpenseChart expenses={filteredExpenses} />
            <Filter expenses={filteredExpenses} />
            <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
        </div>
    );
}

export default App;
