import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                const remaining = services.filter(service =>service._id !== id)
                setServices(remaining)
                }
                
        })
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    {/* <h3>{service.name}</h3>
                    <button onClick={() =>handleDelete(service._id)}>Delete</button> */}
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service.img} />
  <Card.Body>
                            <Card.Title>{service.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button onClick={() =>handleDelete(service._id)} variant="primary">Delete</Button>
  </Card.Body>
</Card>
                </div>)
            }
        </div>
    );
};

export default ManageServices;