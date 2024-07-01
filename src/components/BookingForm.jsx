import React, { useState } from 'react';
import { createBooking } from '../service/api';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

function BookingForm() {
  const [booking, setBooking] = useState({
    name: '',
    date: '',
    startTime: '',
    endTime: '',
    court: ''
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBooking(booking);
      alert('Pemesanan berhasil!');
      setBooking({ name: '', date: '', startTime: '', endTime: '', court: '' });
    } catch (error) {
      alert('Gagal melakukan pemesanan. Silakan coba lagi.');
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Nama</Label>
        <Input
          id="name"
          name="name"
          value={booking.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="date">Tanggal</Label>
        <Input
          id="date"
          name="date"
          type="date"
          value={booking.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="startTime">Waktu Mulai</Label>
        <Input
          id="startTime"
          name="startTime"
          type="time"
          value={booking.startTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="endTime">Waktu Selesai</Label>
        <Input
          id="endTime"
          name="endTime"
          type="time"
          value={booking.endTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="court">Lapangan</Label>
        <Select name="court" value={booking.court} onValueChange={(value) => handleChange({ target: { name: 'court', value } })}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Lapangan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Lapangan 1</SelectItem>
            <SelectItem value="2">Lapangan 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Pesan Lapangan</Button>
    </form>
  );
}

export default BookingForm;