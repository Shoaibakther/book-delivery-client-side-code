import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return   <Spinner animation="border" variant="danger" />
    }
    return (
        <div id="">
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;