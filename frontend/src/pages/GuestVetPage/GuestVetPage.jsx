import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import VetProfilePresenter from '../../components/VetProfilePresenter';

const GuestVetPage = () => {

    
    return ( 
        <div>
            <VetProfilePresenter />
        </div>
     );
}
 
export default GuestVetPage;