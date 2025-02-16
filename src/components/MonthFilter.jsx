import { useState } from 'react';

const MonthFilter = ({ onMonthChange }) => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

    const handleMonthChange = (e) => {
        const month = Number(e.target.value);
        setSelectedMonth(month);
        onMonthChange(month);
    };

    return (
        <div className="month-filter">
            <label>Filter by Month: </label>
            <select value={selectedMonth} onChange={handleMonthChange}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        </div>
    );
};

export default MonthFilter;
