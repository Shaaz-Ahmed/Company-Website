import React from 'react';
import Fnews from './Fnews';
import Header from '../../src/Header/Header';
import Footer from '../Footer/Footer';

const Foreign = () => {
    
  return (
    <div>
    <div style={{ backgroundColor: '#e6e6e6', display: 'flex', justifyContent: 'center', alignItems: 'center' , padding:'20px'}}>
      <div style={{ textAlign: 'center' }}>
       
        <iframe
          width="1050"
          height="255"
          src="https://www.youtube.com/embed/w2EMbZlJUBo?si=u5faybT_V7Hiy50k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        
      </div>
    </div>
    <h1 style={{ marginLeft: '150px', marginTop:'40px' , fontWeight: 'bold'}}>विदेश</h1>
    <Fnews />
    <br></br>
    <Header />
 

   <Footer />
    </div>
  );
};

export default Foreign;
