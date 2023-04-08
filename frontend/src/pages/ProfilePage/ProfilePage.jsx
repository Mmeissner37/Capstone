import React from "react";
import ProfilePresenter from "../../components/ProfilePresenter/ProfilePresenter";
import useAuth from "../../hooks/useAuth";


const ProfilePage = () => {
    const [user, token] = useAuth()

    return ( 
        <div>
            <h1>Hello {user.username}</h1>
        </div>
     );
}
 
export default ProfilePage;