import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import Shipping from '../pages/Shipping.jsx';
import Fulfillment from '../pages/Fulfillment.jsx';
import Quote from '../pages/Quote.jsx';
import Contact from '../pages/Contact.jsx';
import Booking from '../pages/Booking.jsx';

import PrivateRoute from './PrivateRoute.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/fulfillment" element={<Fulfillment />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/contact" element={<Contact />} />

      {/* Private Route */}
      <Route
        path="/booking"
        element={
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
