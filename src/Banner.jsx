// this component contain banner 
import React from 'react';
import banner from "../src/images/banner.jpg";

const Banner = ()=>{
    return(
        <>  
                <div className='container'>
                    <div>
                          <img src= {banner} alt='banner_image'/>
                    </div>
                </div>

        </>
    );
};

export default Banner;