import React from 'react';
import { useHistory } from 'react-router';

const OrderItem = (props) => {
    const {_id, userName, name, price, quantity, img} = props.order;
    const history = useHistory();
    
const addProduct = () => {
    history.push("/shipment");
  };

const handleDelete = () => {
    fetch(`/deleteOrder/${_id}`, {
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
            <div className="text-center shadow h-100 p-3 m-3">
                <div>
                    <img className="img-fluid w-50" src={img} alt=''></img>
                </div>
                <div className="">
                    <h4>{userName}</h4>
                    <h5>{name}</h5>
                    <span>Price: {price}</span>
                    <p>Quantity: {quantity}</p>
                    <div className="d-flex justify-content-between">
                      <button onClick={() => addProduct()}  className="btn btn-success">Buy Now</button>
                      <button onClick={handleDelete} className='btn btn-danger'>Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>
     )
  };

export default OrderItem;