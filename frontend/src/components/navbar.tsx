import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>Barber Management</h2>

      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/barbers">Barbers</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
      </ul>
    </nav>
  );
}