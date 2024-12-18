import React from 'react';
import { useState } from 'react';

const MonthPicker = () => {
    const [selectedMonth, setSelectedMonth] = useState('');
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
        ];
    return (
    <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        style={{
        padding: '5px',
        backgroundColor: 'rgba(252, 253, 253, 1)',
        borderColor: 'rgba(213, 213, 213, 1)',
        color: 'rgba(43, 48, 52, 0.8)',
        borderRadius: '5px',
        margin: '10px 10px 0px 0px',
        fontSize: '14px',
        outline: 'none',
        }}
    >
        <option value="">Select a Month</option>
        {months.map((month, index) => (
        <option key={index} value={month}>
            {month}
        </option>
        ))}
    </select>
    );
    };

export default MonthPicker;