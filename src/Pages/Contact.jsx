import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        subject: '',
        email: '',
        body: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container mt-4">
            <h1 className='text-center'>Contact Us</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        minLength={3}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Subject*</Form.Label>
                    <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        minLength={3}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Body*</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        minLength={3}
                        required
                    />
                </Form.Group>

                <Button className='m-2' variant="btn btn-outline-dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;
