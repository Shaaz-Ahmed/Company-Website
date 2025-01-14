import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Home';
// import Service from './Service';
// import Contact from './Contact';
// import About from './About';
import NavBar from './NavBar';
import Bharat from '../src/Bharat/Bharat';
import Foreign from '../src/Foreign/Foreign';
import Entertainment from '../src/Entertainment/Entertainment';
// import Entertainment from './Entertainment';
//  import Game from './Game';
import Game from '../src/Game/Game';
// import Technology from './Technology';
import Technology from './Technology/Technology';
import Social from './Social';
import Video from './Video';
import Podcast from './Podcast';
import Home from './Home';
import Header from '../src/Header/Header';

const App = () => {
    return (
        <>
        <Header />
        <NavBar/>
            <Routes>
            <Route path='/home' element={<Home />} />
                <Route path='/bharat' element={<Bharat />} />
                <Route path='/foreign' element={<Foreign />} />
                <Route path='/entertainment' element={<Entertainment />} />
                <Route path='/game' element={<Game />} />
                <Route path='/technology' element={<Technology />} /> 
                <Route path='/social' element={<Social />} />
                <Route path='/video' element={<Video />} />
                <Route path='/podcast' element={<Podcast />} />
                

            </Routes>
        </>
    );
};

export default App;
