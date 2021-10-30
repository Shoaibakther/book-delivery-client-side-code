
import axios, { Axios } from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddService = () => {
       const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
      axios.post('http://localhost:5000/services', data)
          .then(res => {
              if (res.data.insertedId) {
                  alert("Added Successfully")
                  reset();
          }
      })
  }
   
    return (
        <div className="add-service">
            <h1>Please add a service</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}
      placeholder="Name:"          />
      <input {...register("description", )} placeholder="Description"/>
               
                <input {...register("img", )} placeholder="Img Link" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;