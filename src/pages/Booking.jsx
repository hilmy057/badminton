import React from 'react';
import BookingForm from '../components/BookingForm';

function Booking() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pesan Lapangan</h1>
      <BookingForm />
    </div>
  );
}

export default Booking;