import React from 'react'

const DateTime = () => {
    const now = new Date();
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    const formattedDate = now.toLocaleString('en-US', options).toLowerCase().replace(',', '');
    return (
        <div>{formattedDate}</div>
    )
}

export default DateTime