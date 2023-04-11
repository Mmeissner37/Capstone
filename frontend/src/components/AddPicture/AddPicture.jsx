import React, { useState } from 'react';



function AddPicture () {
    const [file, setFile] = useState();

    function handleChange(event) {
        event.preventDefault();
        console.log(event.target.files);
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <div className='pictures'>
            <h4>Add Profile Picture: </h4>
            <input type='file' onChange={handleChange} />
            <img src={file} height='200px' width='150px' />
        </div>
    )

}

export default AddPicture; 