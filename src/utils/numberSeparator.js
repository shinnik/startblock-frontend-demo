import React from 'react';

export default function numberFormat(num) {
    if (!isFinite(num)) {
        return num;
    }
    const parts = num.toString().split('.');
    const p = parts[0].split(/\B(?=(\d{3})+(?!\d))/g);
    const q = p.slice(0, -1);
    if (q.length < 2)
        return num;
    return q.map((value, index) => <span key={index}>
        {value}
        {index < q.length-1 && <span style={{fontSize: '8px'}}> </span>}
    </span>);
}
