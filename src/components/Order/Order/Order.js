import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
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
        <section>
           <Navbar/>
           <h3 className='text-center mt-5'><span className='text-info'>{user.name}'s </span>Order List</h3>
            <div className='row justify-content-center m-5 mt-5'>
                {
                  Order.map(order => <OrderItem order={order}></OrderItem>)
                }
            </div>
        </section>
    );
};

export default Order;