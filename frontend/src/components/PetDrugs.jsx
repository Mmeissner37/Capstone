import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';



const PetDrugs = (props) => {
    const [user, token]= useAuth();
    const [petDrugs, setPetDrugs] = useState([]);
    const [filteredDrugs, setFilteredDrugs] = useState([]);
    
    useEffect (() => {
        const fetchDrugs = async() => {
            try {
                let response = await axios.get('http://127.0.0.1:8000/both/all/', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
                setPetDrugs(response.data)
                filterDrugs();
            } catch (error) {
                console.log(error.response.data)
            }
        };
        fetchDrugs();
    }, [token]);

    function filterDrugs(){
        let filteredDrugs = petDrugs.filter((el) => {
            if (el.pet.id === props.petID){
                return true
            }
        });
        setFilteredDrugs(filteredDrugs)
    }

    // add filter function here to filter based on prop passed in (pet id) reference music library filter
    //filter.includes(pet_prescription.pet_id).map(pet_prescription)

    return ( 
        <div className='petdrugs'>
            {filteredDrugs[0] ? filteredDrugs.map(el => {return(<ul><li>Drug Name: {el.prescription.drug_name}</li><li>Drug Dose: {el.prescription.drug_dose}</li><li>Drug Instructions: {el.prescription.drug_instr}</li></ul>)}) : "No current medications"}
        </div>
     );
}
 
export default PetDrugs;

// <div className='petdrugs'>
// {petDrugs.map((pet_prescription) =>
// <ul key={pet_prescription.id}>
//     {/* Pet ID: {pet_prescription.pet_id}
//     Pet Name: {pet_prescription.pet_name} */}
//     Prescription ID: {pet_prescription.prescription}
//     {pet_prescription.prescription}
// </ul>
// )}
// </div>