
export const fetchSeats = async (rowCount) => {
    const response = await fetch(`https://codebuddy.review/seats?count=${rowCount}`);
    const responsData= await response.json();
    return responsData.data
};

export const submitSeats = async (selectedSeats) => {
    const response = await fetch('https://codebuddy.review/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ seats: selectedSeats }),
    });
    return await response.json();
};