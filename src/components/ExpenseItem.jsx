import { FaTrash } from 'react-icons/fa';

const ExpenseItem = ({ expense, deleteExpense }) => {
    return (
        <div className="expense-item">
            <span>{expense.name} - Ghc {expense.amount} ({expense.category})</span>
            <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>
                <FaTrash />
            </button>
        </div>
    );
};

export default ExpenseItem;
