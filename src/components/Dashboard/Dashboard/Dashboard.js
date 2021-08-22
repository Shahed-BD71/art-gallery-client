import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Sidebar/>
        </section>
    );
};

export default Dashboard;