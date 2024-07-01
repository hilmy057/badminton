import { supabase } from './supabase';

export const fetchBookings = async () => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('date', { ascending: true });

  if (error) throw error;
  return data;
};

export const createBooking = async (bookingData) => {
  const { data, error } = await supabase
    .from('bookings')
    .insert([
      {
        name: bookingData.name,
        date: bookingData.date,
        start_time: bookingData.startTime,
        end_time: bookingData.endTime,
        court: bookingData.court,
      },
    ])
    .single();

  if (error) throw error;
  return data;
};

export const deleteBooking = async (id) => {
  const { error } = await supabase
    .from('bookings')
    .delete()
    .match({ id });

  if (error) throw error;
};