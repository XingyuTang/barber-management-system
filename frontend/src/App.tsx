// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Layout from './components/layout'
import DashboardPage from './pages/dashboard'
import CustomersPage from './pages/customers'
import BarbersPage from './pages/barbers'
import ServicesPage from './pages/services'
import AppointmentsPage from './pages/appointments'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="barbers" element={<BarbersPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
