import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//React-Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import API from './API';


const CreateImage = (props) => {
    const [pets, setpets] = useState([]);
    const navigate = useNavigate

    const [data, setData] = useState({
        image_url: '',
    });

    const [errors, setErrors] = useState({
        image_url: '',
    });

    const handleImageChange = (e) => {
        let newData = {...data};
        newData["image_url"] = e.target.files[0];
        setData(newData);
        navigate('/profiles');
    }

    const doSubmit = async (e) => {
        e.preventDefault();
        const response = await API.createImageEntry(data, props.petID);
        console.log(response)
        if (response.status === 400) {
            setErrors(response.data)
        }
    };
    
    return ( 
    <div>
        <Form>
            <Row>
                <Form.Group controlId="formFile" className="mb-3">
                    <div>
                        <div>
                            <Form.Control
                                type="file"
                                name="image_url"
                                accept="image/jpeg,image/png,image/gif"
                                onChange={(e) => {
                                    handleImageChange(e);
                                }}
                            /><br></br>
                            <div className='image-button'>
                                <Button type="submit" onClick={(e) => doSubmit(e)}>Submit</Button>
                            </div>
                            {errors.image_url && (
                                <Form.Text className="alert-danger" tooltip>
                                    {errors.image_url}
                                </Form.Text>
                            )}
                        </div>
                </div>
                </Form.Group>
            </Row>
        </Form>
    </div>
    );
};
 
export default CreateImage;



