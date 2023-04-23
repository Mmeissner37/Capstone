// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AddPrescriptionPage from "./pages/AddPrescriptionPage/AddPrescriptionPage";
import UpdatePetPage from "./pages/UpdatePetPage/UpdatePetPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import AddPrescription from "./pages/AddPrescriptionPage/AddPrescriptionPage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="whole-page">
        <Routes>
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profiles" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/createdrug" element={<PrivateRoute><AddPrescriptionPage /></PrivateRoute>} />
          <Route path="/updatepet" element={<PrivateRoute><UpdatePetPage /></PrivateRoute>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
