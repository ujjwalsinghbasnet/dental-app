import React, { useState, useEffect } from 'react';
import MobileMenu from '../MobileMenu';
import Navigation from '../Navigation';


function NavResponsive() {

    const [mobStatus, setMobStatus] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log(window.innerWidth)
            if(window.innerWidth <= 770){
                setMobStatus(true)
            } else{
                setMobStatus(false)
            }
        })

        return () => {
            window.removeEventListener('resize', null)
        }
    },[])

  return (
      <>
        {
            mobStatus ? <MobileMenu /> : <Navigation />
        }
      </>
  );
}

export default NavResponsive;
