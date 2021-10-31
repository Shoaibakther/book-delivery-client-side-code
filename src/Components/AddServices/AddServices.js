
import axios, { Axios } from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddService = () => {
       const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
      axios.post('https://warm-sierra-60558.herokuapp.com/services', data)
          .then(res => {
              if (res.data.insertedId) {
                  alert("Added Successfully")
                  reset();
          }
      })
  }
   
    return (
        <div className="add-service">
            <h1>Please Add A Service</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 40 })}
      placeholder="Name:"          />
      <input {...register("description", )} placeholder="Description"/>
               
                <input {...register("img", )} placeholder="Img Link" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;