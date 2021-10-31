import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
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
<button  className="btn btn-danger">Delete Order</button>
{/* <button  className="btn btn-success">{service?.status}</button> */}
  </Card.Body>
</Card>
        </div>
                    ))
                }
            </div>
                <div className="order-section">
                    <h1>Please fill up the form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="firstName" {...register("name", { required: true, maxLength: 40 })}
                            
                            
      placeholder="Customers Name:"          />
      <input {...register("email", )} placeholder="Customers Email:"/>
               
                <input {...register("number", )} placeholder="Phone Number" />
                <input {...register("address", )} placeholder="Delivery address" />
                
      <input type="submit"value="Place Order" />
    </form>
                </div>
           </div>
      </div>
    );
};

export default MyOrder;