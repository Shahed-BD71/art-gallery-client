import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar'
import "./Shipment.css";
import { getDatabaseCart, processOrder } from "../../../utilities/databaseManager";
import ProcessPayment from "./ProcessPayment/ProcessPayment";
const user = JSON.parse(localStorage.getItem('user'));

const Shipment = () => {
  const { register, handleSubmit} = useForm();
  const errors = {
    name: '',
    email: '',
    address: " ",
    phone: " "
};
  const [shippingData, setShippingData] = useState(null);

  const handlePaymentSuccess = (paymentId) => {
    console.log("submitted", shippingData);
    const savedCart = getDatabaseCart();
    console.log(savedCart)
    const orderDetails = {
      ...user,
      products: savedCart,
      shipment: shippingData,
      paymentId,
      orderTime: new Date(),
    };


    fetch(`https://warm-peak-57266.herokuapp.com/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
       console.log(data)
        if (data) {
          processOrder();
          alert("Successfully Order Done..");
        } else {
          alert("Something Went Wrong, Try again");
        }
      });
  };

  const onSubmit = (data) => {
    setShippingData(data);
  };


  return (
    <section style={{overflow: 'hidden'}}>
      <Navbar/>
      <div className="row">
      <div
        style={{ display: shippingData ? "none" : "block" }}
        className="col-md-6 m-3"
      >
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="name"
            defaultValue={user.name}
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          {errors.name && <span className="error">Name is required</span>}

          <input
            type="email"
            email="email"
            defaultValue={user.email}
            {...register("email", { required: true })}
            placeholder="Your Email"
          />
          {errors.email && <span className="error">Email is required</span>}

          <input
            type="text"
            address="address"
            {...register("address", { required: true })}
            placeholder="Your Address"
          />
          {errors.address && <span className="error">Address is required</span>}

          <input
            className="no-arrow"
            type="number"
            pattern="[+]{1}[0-9]{11,14}"
            phone="phone"
            {...register("phone", { required: true })}
            placeholder="Your Phone Number"
          />
          {errors.phone && (
            <span className="error">Phone Number is required</span>
          )}
          <input className="btn-brand" type="submit" />
        </form>
      </div>
      <div
        style={{ display: shippingData ? "block" : "none" }}
        className="col-md-4 m-5 p-5 payment-area rounded"
      >
        <h4>Payment Area:</h4>
        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
        <br></br>
      </div>
     </div>
    </section>
  );
};

export default Shipment;
