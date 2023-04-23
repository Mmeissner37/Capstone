import React, { useState } from 'react';




const DisplayPicture = (petID) => {
    const [pets, setPets] = useState([]);

    return (
        <div className='pictures'>
            {pets && 
            pets.map((petprofile) =>
            <ul key={petprofile.image_url}>
                Picture: <img src = {`http://127.0.0.1:8000/pets/${petprofile.image_url}/`} />
            </ul>)}
        </div>
    )
}

export default DisplayPicture; 



