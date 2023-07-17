import { Link } from "react-router-dom";
import './Navber.css'
const Navber = () => {
    const i = 1 || 2 || 3 || 4 || 5 || 6;


    const navitem = <>

        <ul className="menu  menu-horizontal max-md:flex md:-mt-4 max-md:flex-col  xl:justify-center  font-semibold md:gap-7  text-white md:inline-block text-decoration-none  max-md:rounded-3xl gap-4   text-xl">
            
                <li style={{ '--i': 4 }}  ><Link className="   hover:bg-blue-50  hover:text-secondary  text-yellow-50  text-decoration-none md:border-secondary md:hover:-mt-2   md:hover:border-b-[3px] 
md:hover:border-s-0  md:hover:border-t-0  xl:ms-5 hover:bg-opacity-90  md:hover:border-e-0  md:py-1 py-2" to='/'> Home</Link></li>
                <li style={{ '--i': 3 }}  ><Link className="hover:bg-blue-50   text-decoration-none hover:text-secondary text-yellow-50 md:border-secondary md:hover:-mt-2   md:hover:border-b-[3px] 
md:hover:border-s-0  md:hover:border-t-0  xl:ms-5  md:hover:border-e-0 md:py-1 py-2 " to='/services'>Services</Link></li>
                <li style={{ '--i': 2 }}  ><Link className="hover:bg-blue-50  text-decoration-none hover:text-secondary text-yellow-50 md:border-secondary md:hover:-mt-2   md:hover:border-b-[3px] 
md:hover:border-s-0  md:hover:border-t-0  xl:ms-5  md:hover:border-e-0  md:py-1 py-2 " to='/project'> Projects</Link></li>
                <li style={{ '--i': 1 }}  ><Link className="hover:bg-blue-50  text-decoration-none text-yellow-50 hover:text-secondary md:border-secondary md:hover:-mt-2   md:hover:border-b-[3px] 
md:hover:border-s-0  md:hover:border-t-0  xl:ms-5  md:hover:border-e-0 md:py-1 py-2 " to='/'> Contucts</Link></li>
               
                
        </ul>
    </>


    return (
        <div className=" z-50  nav-bg text-white  bg-gradient-to-l from-sky-500 to-indigo-500  h-[70px] 
        md:h-[110px] md:-mt-12 align max-md:flex">
            <div className="navbar   text-yellow-50 md:w-0   ">
                <div className="navbar-start  " >
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn bg-indigo-500 hover:bg-blue-500 max-md:mt-5 text-white hover:text-rose-500  md:hidden">
                            <svg  xmlns="http://www.w3.org/2000/svg" className="h-12 w-10 max-md:text-white hover:text-rose-100 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  w-52 lg:hidden border-none flex bg-gradient-to-t from-sky-500 to-indigo-500  bg-opacity-1  bg-transparent h-60 gap-10 rounded-3xl text-xl md:hidden">
                            {navitem}
                        </ul>
                        
                    </div>
                </div>
            </div>  

<div className="flex w-100% max-md:hidden justify-between align  mx-16    ">
<div>
                        <ul>
                            <li style={{ '--i': 5 }}><div className="font-bold -mt-12 -ms-10 text-white  text-3xl ">Port<span className="md:text-gray-900">Folio </span></div></li></ul>

                    </div>

            <div className="flex w-100%  justify-between gap-10">

            {navitem}
            <div>




         </div> 

<div className="max-lg:hidden  relative -top-4  ">

         <button style={{ '--i': 6 }} className="  hover:bg-white max-lg:hidden w-[180px]     hover:btn   hover:border-b-4 
hover:border-s-0 hover:border-t-4 hover:border-e-0 hover:text-white
rounded-xl lg:bg-gradient-to-r from-blue-500 to-rose-400  mt-2 me-3 btn  text-white
    font-bold "> Download resume</button>

</div>


</div> 


</div>
<div className="md:hidden">
<button style={{ '--i': 5 }} className="  max-md:float-right  w-[180px] mt-3     hover:btn   hover:border-b-4 
hover:border-s-0 hover:border-t-4 hover:border-e-0 hover:text-white
rounded-xl bg-gradient-to-r from-blue-500 to-rose-400 me-3 btn  text-white
    font-bold "> Download resume</button>




</div>
             </div>
    );
};

export default Navber;