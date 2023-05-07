import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import VetProfilePresenter from "../../components/VetProfilePresenter";


const HomePage = () => {
  const [user, token] = useAuth();
  const [appts, setAppts] = useState([]);

  useEffect (() => {
    getAppts();
  }, [token])

  async function getAppts() {
    let response = await axios.get('http://127.0.0.1:8000/appts/all/', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
      setAppts();
    }


  return (
    <div>
      <div className="container-md">
        <div className="container-header">
          <h1>Home Page for {user.username}!</h1><br></br>
        </div>
        <div>
            <VetProfilePresenter />
        </div>
      </div>
      <div className="calender-header">
        <h1>Welcome Local Paws Animal Clinic!</h1>
        <h4>See all your scheduled appointments below</h4>
        <div>
          {appts && 
          appts.map((appointments) =>
            <ol key={appointments.id}>
              <div>
                Owner: {appointments.username}
                Title: {appointments.title}
                Appoinment Date: {appointments.appt_date}
                Start Time: {appointments.start}
                End Time: {appointments.end} 
              </div>
            </ol>)}
        </div>
        <br></br>
      </div>
    </div>

  );
};

export default HomePage;
