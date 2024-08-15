import React, { useState } from 'react';
import SeatSelection from '../components/SeatSelection';

function Home() {
    return (
        <div className="App">
            <h1 className='font-bold'>Movie Theater Seat Booking</h1>
            <SeatSelection/>
        </div>
    );
}

export default Home;