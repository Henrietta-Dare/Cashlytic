import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense }) => {
    return (
        <div>
            <h3>Expenses</h3>
            {expenses.length > 0 ? (
                expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />)
            ) : (
                <p>No expenses recorded.</p>
            )}
        </div>
    );
};

export default ExpenseList;
