import { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && amount && category) {
            const currentDate = new Date();
            const month = currentDate.getMonth() + 1; 
            const year = currentDate.getFullYear();

            addExpense({
                name,
                amount: Number(amount),
                category,
                month,
                year,
            });

            setName('');
            setAmount('');
            setCategory('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Expense Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
