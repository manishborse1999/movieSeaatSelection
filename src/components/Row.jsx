import React from 'react';
import Seat from './Seat';

const Row = ({ seats, onSelect }) => {
    return (
        <div className="row">
            {seats.map((seat) => (
                <Seat key={seat.id} seat={seat} onSelect={onSelect} />
            ))}
        </div>
    );
};

export default Row;
