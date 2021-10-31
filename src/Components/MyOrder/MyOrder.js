import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import './myOrder.css'

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const email = (user.email);
    
    useEffect(() => {
        fetch(`https://warm-sierra-60558.herokuapp.com/myOrders/${email}`)
        .then(res =>res.json())
        .then(data => setOrders(data))
    }, [])
    
    return (
        <div className="order">
            <h4>Total Orders: {orders?.length}</h4>
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
<button  className="btn btn-danger">Delete Order</button>
{/* <button  className="btn btn-success">{service?.status}</button> */}
  </Card.Body>
</Card>
        </div>
                    ))
                }
            </div>
      </div>
    );
};

export default MyOrder;