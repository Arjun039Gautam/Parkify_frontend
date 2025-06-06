import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import GuestBookingPage from './panels/GuestPanel/GuestBookingPage';
import AdminDashboard from './panels/AdminPanel/adminDashboard/index';
import UserDashboard from "./panels/UserPanel/dashboard/index";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
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
    <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnHover
        draggable
        theme="colored"
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
    />
    </>
  );
}

export default App;
