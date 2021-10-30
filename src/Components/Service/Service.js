import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { _id, name, description, img } = service;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
                    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description.slice(0, 150)}
    </Card.Text>
    <Link to={`/myOrder/${_id}`}><button className="btn btn-warning">Order Now</button></Link>
  </Card.Body>
</Card>
        </div>
    );
};

export default Service;