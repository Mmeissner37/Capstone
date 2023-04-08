import React, { useState } from 'react';



const ProfilePresenter = () => {

    const [profile, setProfile] = useState([]);

    return (
        <ul className="profile-presenter">
            Name: {profile.name}
            Species: {profile.species}
            Breed: {profile.breed}
            Date of Birth: {profile.date_of_birth}
        </ul>
    )
}

export default ProfilePresenter;