import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './ManageServices.css'

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://warm-sierra-60558.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleDelete = id => {
        const url = `https://warm-sierra-60558.herokuapp.com/services/${id}`
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
        <div className="manage">
            <h2>Manage Services</h2>
            <div className="manage-container">
                   {
                services.map(service => <div key={service._id}>
                    {/* <h3>{service.name}</h3>
                    <button onClick={() =>handleDelete(service._id)}>Delete</button> */}
                    <Card border="primary" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service.img} />
  <Card.Body>
                            <Card.Title>{service.name}</Card.Title>
    <Card.Text>
      {service?.description.slice(0, 150)}
    </Card.Text>
    <Button onClick={() =>handleDelete(service._id)} variant="primary">Delete</Button>
  </Card.Body>
</Card>
                </div>)
            }
         </div>
        </div>
    );
};

export default ManageServices;