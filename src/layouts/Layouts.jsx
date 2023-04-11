// shared layout for all pages
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Nav/LayoutNavbar';


const Layouts = () => {
    return (
        <div >
            <Navbar />
            <Outlet  />
            <Footer />
        </div>
    );
}

export default Layouts;