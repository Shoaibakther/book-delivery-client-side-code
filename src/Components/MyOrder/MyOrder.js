import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const MyOrder = () => {
    const { serviceId } = useParams();
   const[service, setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
  
    
    return (
        <div>
           
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service?.img} />
  <Card.Body>
                    <Card.Title>{service?.name}</Card.Title>
    <Card.Text>
                        {service?.description}
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
    );
};

export default MyOrder;