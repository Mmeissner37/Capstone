import React, { useState, useEffect } from 'react';
import useCustomForm from '../../hooks/useCustomForm';



const AddPicture = (props) => {
    return ( 
        <div>
            <form>
                <label className="profile-picture">Add Profile Picture: 
                <input type="file" name='profile-pic' /></label>
                <button>Add Picture</button>
            </form>
        </div>
     );
}
 
export default AddPicture;