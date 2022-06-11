<<<<<<< HEAD
import React, { useState, useEffect, Suspense } from "react";
// import MobileMenu from '../MobileMenu';
// import Navigation from '../Navigation';

const Navigation = React.lazy(() => import("../Navigation")); //this had the largest impact on performance improvement
const MobileMenu = React.lazy(() => import("../MobileMenu"));

function NavResponsive() {
  const [mobStatus, setMobStatus] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 770) {
      setMobStatus(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 770) {
        setMobStatus(true);
      } else {
        setMobStatus(false);
      }
    });

    return () => {
      window.removeEventListener("resize", null);
    };
  }, []);

  return (
    <>
      {mobStatus ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MobileMenu />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
        </Suspense>
      )}
    </>
=======
import React, { useState, useEffect, Suspense } from 'react';
// import MobileMenu from '../MobileMenu';
// import Navigation from '../Navigation';

const Navigation = React.lazy(() => import('../Navigation')) //this had the largest impact on performance improvement
const MobileMenu = React.lazy(() => import('../MobileMenu'))


function NavResponsive() {

    const [mobStatus, setMobStatus] = useState(false)

    useEffect(() => {
        if(window.innerWidth <= 770){
            setMobStatus(true)
        }
        window.addEventListener('resize', () => {
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
            mobStatus ?
                <Suspense fallback={<div>Loading...</div>}>
                    <MobileMenu />
                </Suspense>
            : 
            <Suspense fallback={<div>Loading...</div>}>
                <Navigation />
            </Suspense>
        }
      </>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
  );
}

export default NavResponsive;
