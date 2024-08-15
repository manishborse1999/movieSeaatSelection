import React from 'react';

const Seat = ({ seat, onSelect }) => {
    const handleClick = () => {
        if (!seat.isReserved) {
            onSelect(seat);
        }
    };

    return (
        <button
            className={`seat p-2 border rounded-md ${seat.isReserved ? 'bg-gray-400 cursor-not-allowed' : seat.isSelected ? 'bg-green-500' : 'bg-white hover:bg-green-500'} `}
            onClick={handleClick}
            disabled={seat.isReserved}
        >
            Seat {seat.seatNumber} (Row {seat.row + 1})<br />
            {seat.isReserved ? 'Reserved' : seat.isSelected ? 'Selected' : 'Available'}
        </button>
    );
};

export default Seat;
