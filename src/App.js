import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import GuestBookingPage from './panels/GuestPanel/GuestBookingPage';
import AdminDashboard from './panels/AdminPanel/adminDashboard/index';
import UserDashboard from "./panels/UserPanel/dashboard/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/guest" element={<GuestBookingPage />} />
        
        {/* Main User Route */}
        <Route path="/user" element={<UserDashboard />} />
          {/* <Route index element={<UserDashboard />} /> // default view with scroll
          <Route path="userbooking" element={<BookingForm />} /> // optional direct route
          <Route path="userslotview" element={<UserSlotView />} />
          <Route path="mybookings" element={<MyBooking />} /> */}
        {/* </Route> */}

        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
