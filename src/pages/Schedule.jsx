import React from 'react';
import BookingCalendar from '../components/BookingCalendar';

function Schedule() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Jadwal Lapangan</h1>
      <BookingCalendar />
    </div>
  );
}

export default Schedule;