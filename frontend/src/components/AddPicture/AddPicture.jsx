import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';




function AddPicture () {

    return (
        <div className='pictures'>
            <h4>Add Profile Picture: </h4>
            {/* <img src = {`http://127.0.0.1:8000${el.image_url}`} height='200px' width='150px' /> */}
        </div>
    )
}

export default AddPicture; 



// const AddPicture = () => {
//     var form = document.getElementById('form')

//     form.addEventListener('submit', function (event) {
//         event.preventDefault()
//         var reader = new FileReader()
//         var name = document.getElementById('image').files[0].name

//         reader.addEventListener('load', function(){
//             if(this.result && localStorage) {
//                 window.localStorage.setItem(name, this.result)
//                 alert('image stored in local storage')
//                 showImages()
//             }
//             else {
//                 alert('Upload not successful')
//             }
//         })

//         reader.readAsDataURL(document.getElementById('image').files[0])
//         console.log(name)
//     })

//     function showImages() {
//         for (let i = 0; i < window.localStorage.length; i++){
//             let res = window.localStorage.getItem(window.localStorage.key(i))
//             var image = new Image()
//             image.src = res;
//         }

//     //Make this an onClick Event Handler 
//     function remove () {
//         window.localStorage.clear()
//         showImages()
//     }

//     return (
//         <div className='container'>
//             <h4>Add Profile Picture: </h4>
//             <form encType='multipart/form-data' method='post'>
//                 <div className='form-group'>
//                     <input type='file' class='form-control' id='image'></input>
//                 </div>
//                 {/* <div class='form-group'>
//                     <button class='btn btn-primary'>Upload</button>
//                 </div> */}
//             </form>
//             {/* <button onclick= 'remove()' class='btn btn-danger'>Remove</button>
//             <div id='result'></div> */}
//         </div>
//         )
//     }

// export default AddPicture;



