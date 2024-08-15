import React, { useState, useEffect } from 'react';
import Row from './Row';
import { fetchSeats, submitSeats } from '../api';
import TotalCost from './TotalCost';

const SeatSelection = () => {
    const [rowCount, setRowCount] = useState(3);
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        handleFetchSeats();
    }, []);

    useEffect(() => {
        const cost = selectedSeats.reduce((total, seat) => total + ((seat.row + 1) * 10) + 20, 0);
        setTotalCost(cost);
    }, [selectedSeats]);

    const handleFetchSeats = () => {
        if (rowCount >= 3 && rowCount <= 10) {
            fetchSeats(rowCount).then((data) => setSeats(data));
            setSelectedSeats([]);
            setTotalCost(0);
        } else {
            alert('Please enter a valid number of rows between 3 and 10.');
            setRowCount(seats.length)
        }
    };

    const handleSelectSeat = (seat) => {
        const updatedSeats = seats.map(row => ({
            ...row,
            seats: row.seats.map(s =>
                s.id === seat.id ? { ...s, isSelected: !s.isSelected } : s
            )
        }));
        setSeats(updatedSeats);
        const updatedSelectedSeats = updatedSeats.flatMap(row => row.seats.filter(s => s.isSelected));
        setSelectedSeats(updatedSelectedSeats);
    };

    const handleSubmit = async () => {
        if (selectedSeats.length >= 1 && selectedSeats.length <= 5) {
            const resp = await submitSeats(selectedSeats.map(seat => seat.id))
            alert('Seats submitted successfully!');
        } else {
            alert('Please select between 1 and 5 seats.');
        }
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="mb-4 flex items-center space-x-4">
                <input
                    type="number"
                    value={rowCount}
                    onChange={(e) => setRowCount(e.target.value)}
                    min="3"
                    max="10"
                    placeholder="Enter rows"
                    className="border rounded-md p-2 w-28 text-center"
                />
                <button
                    onClick={handleFetchSeats}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Fetch Seats
                </button>
            </div>

            <div className="space-y-4 mb-6">
                {seats.map((row, index) => (
                    <Row
                        key={row.id}
                        row={index + 1}
                        seats={row.seats}
                        onSelect={handleSelectSeat}
                    />
                ))}
            </div>

            <TotalCost totalCost={totalCost} />

            <button
                onClick={handleSubmit}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mt-6"
            >
                Submit Selected Seats
            </button>
        </div>
    );
};

export default SeatSelection;