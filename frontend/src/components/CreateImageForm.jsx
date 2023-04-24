import React, { useState } from 'react';

//React-Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import API from './API';


const CreateImage = (props) => {
    const [pets, setpets] = useState([]);

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
                    <div className='image-form'>
                        <div>
                            <Form.Label>Add Profile Picture:</Form.Label>
                        </div><br></br>
                        <div>
                            <Form.Control
                                type="file"
                                name="image_url"
                                accept="image/jpeg,image/png,image/gif"
                                onChange={(e) => {
                                    handleImageChange(e);
                                }}
                            />
                            {errors.image_url && (
                                <Form.Text className="alert-danger" tooltip>
                                    {errors.image_url}
                                </Form.Text>
                            )}
                        </div>
                    </div>
                </Form.Group>
            </Row>
            <div className='image-form'>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => doSubmit(e)}>
                Submit</Button>
            </div>
        </Form>
    </div>
    );
};
 
export default CreateImage;