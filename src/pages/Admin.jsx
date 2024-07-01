import React from 'react';
import AdminDashboard from '../components/AdminDashboard';

function Admin() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <AdminDashboard />
    </div>
  );
}

export default Admin;