import './Banner.css'
import { FaFacebook, FaGit, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import React from 'react';
import Typed from 'typed.js';
import img from '../../../assets/my-photo.png'


const Banner = () => {
    const i = 6 || 7 || 8 || 9 || 5

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontent Web Developer.', 'MARN Web Developer', 'React Web Developer', 'Backent Web Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            startDelay: 100,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
    
    
    <div className=' xl:p-28 xl:-mt-16  lg:py-32 mx-10 lg:-mt-16 '>
        <div className=' xl:bg-gray-400 p-2   lg:h-[670px] xl:bg-opacity-30 xl:border-[2px] lg:rounded-lg lg: xl:border-white xl:shadow-gray-700 lg:shadow-lg          lg:bg-gray-400 lg:bg-opacity-30 lg:border-[2px] lg:border-white lg:shadow-gray-700 lg:p-[2px] '>

<div  className='xl:bg-gray-400   lg:h-[660px] xl:bg-opacity-30 xl:border-[2px] lg:rounded-lg lg: xl:border-white xl:shadow-gray-700 lg:shadow-lg          lg:bg-gray-400 lg:bg-opacity-30 lg:border-[2px] lg:border-white lg:shadow-gray-700 lg:p-[2px] '>
    
        <div className='banner align grid  lg:grid-cols-2  grid-row-reverse    '>



            <div className='  p-1 w-[512px]  xl:ms-20  lg:ms-10 mx-auto mt-10 max-sm:h-[580px] max-sm:w-[380px] bg-gray-400 bg-opacity-30 flex justify-center lg:border-0  border-[2px] rounded-lg border-white shadow-gray-700 shadow-lg h-[500px]  align'>

            
            <div className='shadow-gray-700 shadow-sm max-sm:h-[560px] justify-center border-white lg:border-0  border-[1px] rounded-lg  align h-[490px]   w-[500px] flex p-10  text-xl'>
                <div>
                    <h1 className='banner-text-animation text-white    font-semibold text-5xl mb-4 '>Raton Kumar</h1>
                    <h3 className='banner-text'>
                       I'm a  <span className='text-gray-800 font-semibold sm:text-2xl' ref={el} />
                    </h3>

<br />
                    <p className='banner-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi pariatur et dolore, modi necessitatibus ratione harum fugit facilis? Laboriosam vero, atque eveniet minima voluptatibus harum optio culpa sunt cum quia.
                    </p>
                    <br />
                    <div className='social-media '>
                        <ul className='flex gap-5 banner-text-animation '>


                            <li style={{ '--i': 5 }}  ><span className="hover:text-white  "> <FaFacebook /> </span></li>
                            <li style={{ '--i': 6 }}  ><span className="hover:text-white  "><FaLinkedin /></span></li>
                            <li style={{ '--i': 7 }}  ><span className="hover:text-white  "><FaGit /></span></li>
                            <li style={{ '--i': 8 }}  ><span className="hover:text-white  "><FaWhatsapp /> </span></li>



                        </ul>
                    </div>
                    <br />

                    <button style={{ '--i': 5 }} className="   w-[180px] mt-3     hover:btn   hover:border-b-4 
hover:border-s-0 hover:border-t-4 hover:border-e-0 hover:text-white
rounded-xl bg-gradient-to-r from-indigo-500 to-rose-400 me-3 btn  text-white
    font-bold "> Download resume</button>
                   




                </div>
            </div>
            </div>
            <section className='flex justify-center max-lg:hidden align-middle md:mt-19'>
                <div >
                    <img className='max-lg:mt-16   img rounded-3xl lg:ms-16' src={img} alt="" />
                </div>
            </section>

            <div className='flex justify-center lg:hidden  md:mt-19'>
                <div >
                    <img className='max-lg:mt-16    rounded-3xl lg:ms-16' src={img} alt="" />
                </div>
            </div>

        </div>
        </div>
        </div>
        </div>
    );
};

export default Banner;