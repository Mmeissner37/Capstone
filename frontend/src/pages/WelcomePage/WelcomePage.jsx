import './WelcomePage.css';
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {
    const navigate = useNavigate();

    return ( 
        <div className='welcome'>
            <div className='container'>
                <div className='header'>
                    <h1>Welcome!</h1>
                </div>
                <div className='welcome-container'>
                    <div>
                        <h3>New to Pawrent Helper? Please click the button below to login or register</h3><br></br>
                        <button onClick={() => navigate('/login')}>Let's Get Started!</button>
                    </div>
                    <div>
                        <h3>Local Paws Animal Clinic</h3><br></br>
                        <button onClick={() => navigate('/vetlogin')}>Click Here</button>
                    </div>
                    <div>
                        <h3>Speciality Veterinary Practice?</h3><br></br>
                        <button onClick={() => navigate('/guestlogin')}>Click Here</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WelcomePage;