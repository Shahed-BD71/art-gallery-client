import React, { useEffect, useState } from "react";
import Sidebar from '../../Dashboard/Sidebar/Sidebar'

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders)

  useEffect(() => {
    fetch("https://warm-peak-57266.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="container-fluid row ">
      <div className="col-md-2 col-2 me-5">
        <Sidebar></Sidebar>
      </div>
      <div
        className="col-md-9 col-10"
       
      >
        <h5 className="text-brand">All Orders</h5>
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">
                Sr No
            </th>
            <th className="text-secondary" scope="col">
                Name
            </th>
            <th className="text-secondary" scope="col">
                Phone
            </th>
            <th className="text-secondary" scope="col">
                Email
            </th>
            <th className="text-secondary" scope="col">
                Time
            </th>
            </tr>
        </thead>
        <tbody>
        {orders.map((order, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{order.name}</td>
            <td>{order.phone}</td>
            <td>{order.email}</td>
            <td>{order.time}</td>
          </tr>
         ))}
        </tbody>
      </table>   
     </div>
    </div>
  );
};

export default AllOrder;