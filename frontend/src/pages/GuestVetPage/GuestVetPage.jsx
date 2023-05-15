import React, { useState } from 'react';
import VetProfilePresenter from '../../components/VetProfilePresenter';
import './GuestVetPage.css'

const GuestVetPage = () => {


    return ( 
        <div className='guest-page'>
            <div>
                <VetProfilePresenter />
            </div>
        </div>
     );
}
 
export default GuestVetPage;