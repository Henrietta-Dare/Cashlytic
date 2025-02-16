import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ExpenseChart = ({ expenses }) => {
    if (expenses.length === 0) return <p>No expenses to display in the chart.</p>;

    const categoryTotals = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    const chartData = Object.keys(categoryTotals).map(category => ({
        category,
        amount: categoryTotals[category]
    }));

    return (
        <div className="expense-chart">
            <h3>Expense Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} layout="horizontal">
                    <XAxis dataKey="category" type="category" />
                    <YAxis type="number" />
                    <Tooltip formatter={(value) => `Ghc ${value.toFixed(2)}`} />
                    <Legend />
                    <Bar dataKey="amount" fill="#ff4757" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpenseChart;

