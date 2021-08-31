import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import OrderItem from '../../Order/OrderItem/OrderItem';
import AllOrder from '../../AllOrder/AllOrder/AllOrder';


const Dashboard = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Sidebar/>
            <h3 className='ms-5 ps-5 mt-5 text-center'>This is our dashboard. We are working on it.</h3>
        </section>
    );
};

export default Dashboard;