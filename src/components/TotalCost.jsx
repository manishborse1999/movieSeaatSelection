import React from 'react';

const TotalCost = ({ totalCost }) => {
    return (
        <div className="mt-6 text-lg font-semibold">
            <h2 className="text-blue-600">Total Cost: ${totalCost}</h2>
        </div>
    );
};

export default TotalCost;
