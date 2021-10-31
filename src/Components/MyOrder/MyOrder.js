import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Context/useAuth';
import './myOrder.css'

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const email = (user.email);
    const name = (user?.displayName);

    
    useEffect(() => {
        fetch(`https://warm-sierra-60558.herokuapp.com/myOrders/${email}`)
        .then(res =>res.json())
        .then(data => setOrders(data))
    }, [])
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
             firstName: {name}
         }
     });
    const onSubmit = data => {
      axios.post('', data)
          .then(res => {
              if (res.data.insertedId) {
                  alert("Added Successfully")
                  reset();
          }
      })
    }
     const handleDelete = id => {
        const url = `https://warm-sierra-60558.herokuapp.com/myOrders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                const remaining = orders.filter(service =>service._id !== id)
                setOrders(remaining)
                }
                
        })
    }
    
    return (
        <div className="order">
            <h4>Total Orders: {orders?.length}</h4>
            <div className="main-order">
                 <div className="order-container">
                {
                    orders.map((service, index)=> (
                        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service?.img} />
  <Card.Body>
                    <Card.Title>{service?.name}</Card.Title>
    <Card.Text>
 {service?.description.slice(0, 150)}
     
</Card.Text>
<button className="m-2  bg-primary">{service?.status}</button> <br />
<Button onClick={() =>handleDelete(service._id)} variant="danger">Delete</Button>

  </Card.Body>
</Card>
        </div>
                    ))
                }
            </div>
                <div className="order-section">
                    <h1>Customers Information</h1>
               <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Customers Name:</Form.Label>
      <Form.Control value={user?.displayName} type="text" placeholder="Your Name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Customers Email:</Form.Label>
      <Form.Control value={user?.email} type="email" placeholder="Your email" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>BD</option>
        <option>ID</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                </div>
           </div>
      </div>
    );
};

export default MyOrder;