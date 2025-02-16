const ExpenseTotal = ({ expenses }) => {
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div className="expense-total">
            <h3>Total Expenses: Ghc {totalAmount.toFixed(2)}</h3>
        </div>
    );
};

export default ExpenseTotal;

