import React, { useEffect, useState } from 'react';
import OrderItem from '../OrderItem/OrderItem'

const Order = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [Order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://warm-peak-57266.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user.email])


    return (
        <div className='container'>
           <h3>Your Order</h3>
            <div className='row'>
                {
                    Order.map(order => <OrderItem order={order}></OrderItem>)
                }
            </div>
        </div>
    );
};

export default Order;