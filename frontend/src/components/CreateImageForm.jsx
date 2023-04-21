import React, { useState } from 'react';

//React-Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from './API';


{/* <input type="file" 
    name="image_url"
    accept="image/jpeg,image/png,image/gif"
    onChange={(e) => {handleImageChange(e)}}></input> */}


const CreateImage = (props) => {
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
        <img src = {`http://127.0.0.1:8000${props.petID.image_url}`}/>
    };
    
    return ( 
        <Form>
            <Row>
                <Form.Group controlId="formFile" className="mb-3">
                    <div className='image-form'>
                        <div>
                            <Form.Label>Add A Profile Image:</Form.Label>
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
    );
};
 
export default CreateImage;