// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AddPrescriptionPage from "./pages/AddPrescriptionPage/AddPrescriptionPage";
import UpdateDrugPage from "./pages/UpdateDrugPage/UpdateDrugPage";
import DeletePrescriptionPage from "./pages/DeletePrescriptionPage/DeletePrescriptionPage";
import VetHomePage from "./pages/VetHomePage/VetHomePage";
import GuestVetPage from "./pages/GuestVetPage/GuestVetPage";
import GuestLoginPage from "./pages/GuestLoginPage/GuestLoginPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import VetLoginPage from "./pages/VetLoginPage/VetLoginPage";
import RegisterVetPage from "./pages/RegisterVetPage/RegisterVetPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <div>
      <Navbar />
        <div className="whole-page">
          <Routes>
            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
            <Route path="/vets" element={<PrivateRoute><VetHomePage /></PrivateRoute>}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/vetregister" element={<RegisterVetPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/vetlogin" element={<VetLoginPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/guestlogin" element={<GuestLoginPage />} />
            <Route path="/guestvet" element={<PrivateRoute><GuestVetPage /></PrivateRoute>} />
            <Route path="/profiles" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="/createdrug" element={<PrivateRoute><AddPrescriptionPage /></PrivateRoute>} />
            <Route path="/updatedrug" element={<PrivateRoute><UpdateDrugPage /></PrivateRoute>} />
            <Route path="/deletedrug" element={<PrivateRoute><DeletePrescriptionPage /></PrivateRoute>} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
