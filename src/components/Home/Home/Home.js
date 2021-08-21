import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AllProduct from '../../Shop/AllProduct/AllProduct';
import SlideShow from '../SlideShow/SlideShow';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../../Shared/Footer/Footer/Footer';
import Artist from '../Artist/Artist';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <SlideShow/>
            <AllProduct />
            <Artist/>
            <Subscribe />
            <Footer/>
        </div>
    );
};

export default Home;