import React from 'react';

export default function numberFormat(num) {
    if (!isFinite(num)) {
        return num;
    }

    var parts = num.toString().split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');


    return parts.join('.');
}
