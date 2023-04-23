import axios from "axios";

const token = JSON.parse(localStorage.getItem('token')) 

const apiSettings = {

    createImageEntry: async (data, petID) => {
        let form_data = new FormData();
        if (data.image_url)
            form_data.append("image_url", data.image_url, 
            data.image_url.name);
        form_data.append("category", data.category);

        
        const myNewImage = await axios
            .put(`http://127.0.0.1:8000/pets/alterpet/${petID}/`, form_data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                Authorization: 'Bearer ' + token
                }
            }).then((res) => {
                return res;
            }).catch((error) => {
                return error.response;
            });
            return myNewImage;
        },
};

export default apiSettings;