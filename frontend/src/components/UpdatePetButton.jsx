import React, { useState, useEffect } from 'react';


const UpdateButton = (props) => {
    const [update, setUpdate] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
        updatePet();
    }, [token]);

    async function updatePet() {
        let response = await axios.put('');
        setUpdate(response.data)
        console.log(response.data)
    }

    return ( 
        <button onClick={() => updatePet()}>Update Pet Profile</button>
     );
}

export default UpdateButton;