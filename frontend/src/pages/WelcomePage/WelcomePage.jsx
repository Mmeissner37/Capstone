import './WelcomePage.css';
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {
    const navigate = useNavigate();

    return ( 
        <div className='welcome-page'>
            <div>
                <div className='header'>
                    <h1>Welcome!</h1>
                </div>
                <div className='welcome-container'>
                    <div className='welcome-section'>
                        <h3>Starting your Pawrent Helper journey?</h3><br></br>
                        {/* <h3>Please click the button below to login or register</h3><br></br> */}
                        <button onClick={() => navigate('/login')}>Let's Get Started!</button>
                    </div>
                    <div className='welcome-section'>
                        <h3>Local Paws Animal Clinic</h3><br></br>
                        <button onClick={() => navigate('/vetlogin')}>Login Here</button>
                    </div>
                    <div className="welcome-section">
                        <h3>From a speciality veterinary practice?</h3><br></br>
                        <button onClick={() => navigate('/guestlogin')}>Be Our Guest</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WelcomePage;