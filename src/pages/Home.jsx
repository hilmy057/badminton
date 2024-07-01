import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Selamat Datang di GOR Badminton</h1>
      <p className="mb-4">Silakan lihat jadwal atau lakukan pemesanan lapangan.</p>
      <div className="space-x-4">
        <Button asChild>
          <Link to="/schedule">Lihat Jadwal</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to="/booking">Pesan Lapangan</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;