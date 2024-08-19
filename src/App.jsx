import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Error from './Error';
import NavBar from './NavBar';

const App = () => {
    return (
        <>
        <NavBar/>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    );
};

export default App;
