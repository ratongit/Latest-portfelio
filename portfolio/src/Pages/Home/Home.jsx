import React, { useCallback } from "react";
import Banner from "./Banner/Banner";


const Home = () => {
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (<>


<div  className="    max-lg:h-[1200px] lg:border-t-[1px] border-gray-500 lg:h-[900px] mx-auto bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-400">


      <Banner></Banner>
      <div className="w-full h-96">

      </div>
      </div>
         
        
      </>

    );
};

export default Home;