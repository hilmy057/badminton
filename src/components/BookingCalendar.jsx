import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { fetchBookings } from '../service/api';

const localizer = momentLocalizer(moment);

function BookingCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const bookings = await fetchBookings();
      const formattedEvents = bookings.map(booking => ({
        title: `Lapangan ${booking.court}`,
        start: new Date(`${booking.date}T${booking.start_time}`),
        end: new Date(`${booking.date}T${booking.end_time}`),
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error loading bookings:', error);
    }
  };

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default BookingCalendar;
