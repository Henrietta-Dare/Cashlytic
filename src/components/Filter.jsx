import { useState } from 'react';

const Filter = ({ expenses }) => {
    const [category, setCategory] = useState('');

    const filteredExpenses = category ? expenses.filter(expense => expense.category === category) : expenses;

    return (
        <div>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
            </select>

            <h3>Filtered Expenses</h3>
            {filteredExpenses.map(expense => (
                <p key={expense.id}>{expense.name} - Ghc {expense.amount}</p>
            ))}
        </div>
    );
};

export default Filter;
