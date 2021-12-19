import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
      console.log(data);

      axios.post('https://ghoulish-mansion-84118.herokuapp.com/services',data)
      .then(res => {
          if(res.data.insertedId){
              alert('added successfully');
              reset();
          }
      })
    }
    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name"/>
      <textarea {...register("descroption")} placeholder="Description"/>
      {/* <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
      <input {...register("img")} placeholder="image url"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;