import React from 'react';
import { useHistory } from 'react-router';

const OrderItem = (props) => {
    const {_id, name, price, quantity} = props.order;
    const history = useHistory();
    
const handleDelete = () => {
    fetch(`https://warm-peak-57266.herokuapp.com/deleteOrder/${_id}`, {
    method: "DELETE",
    })
      .then(res => res.json)
      .then(data => {
       alert('Your Order is Successfully Deleted')
       history.replace('/')
       })
      }
      return (
        <div className='col-md-4'>
            <div style={{backgroundColor: "#e6b7e8"}} className="text-center rounded shadow">
                <div className="p-4">
                    <h4>{name}</h4>
                    <span>Price: ${price}</span>
                    <p>Quantity: {quantity}</p>
                    <div className="d-flex justify-content-around">
                      <button onClick={handleDelete} className='btn btn-danger'>Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>
     )
  };

export default OrderItem;