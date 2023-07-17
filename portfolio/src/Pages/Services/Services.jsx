import './Services.css'




const Services = () => {
    
    return (
        <div className='services text-lg '>
            
            <h1 className=' text-3xl text-center pt-5 text-blue-500 font-semibold'>My Services  </h1>
            
            <p className='py-4'>
            I provide professional web development services with expertise in HTML, CSS, and JavaScript. I specialize in creating interactive and responsive user interfaces using frameworks like Bootstrap and Tailwind. With React, I build dynamic and efficient web applications. I also handle back-end development using Node.js and Express, integrating databases such as Firebase and MongoDB. I ensure seamless deployment and hosting for optimal user access. I am dedicated to delivering high-quality web solutions that meet clients' needs and exceed expectations.
            </p>

<div className='mx-auto text-center'>

</div>


            <div className='grid  grid-cols-3 gap-16 pb-10'>


            <div className="card w-96 border-2  shadow-xl mt-8">
  <figure><img src={fontend} className='h-[300px]' /></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-400 text-2xl">
    Front-end Development
    </h2>
    <p>Proficient in HTML, CSS, and JavaScript to create interactive and responsive user interfaces</p>
  </div>
</div>

           
            <div className="card w-96 border-2  shadow-xl mt-8">
  <figure><img src={ui} className='h-[300px] w-[450px]' /></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-400 text-2xl">
    UI/UX Design
    </h2>
    <p> Design visually appealing and intuitive user interfaces that enhance the user experience.</p>
  </div>
</div>

           
            <div className="card w-96 border-2  shadow-xl mt-8">
  <figure><img src={ Framework} className='h-[300px]' /></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-400 text-2xl">
    Framework Expertise    </h2>
    <p>Experience with popular frameworks like Bootstrap and Tailwind to create consistent and modern designs.</p>
  </div>
</div>

           
            <div className="card w-96 border-2  shadow-xl mt-8">
  <figure><img src={react} className='h-[300px]' /></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-400 text-2xl">
    React Development    </h2>
    <p> Building dynamic and efficient web applications using React library and its ecosystem.</p>
  </div>
</div>

           
            <div className="card w-96 border-2  shadow-xl mt-8">
  <figure><img src={backend} className='h-[300px]' /></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-400 text-2xl">
    Back-end Development    </h2>
    <p>Utilizing Node.js and Express to develop server-side logic and RESTful APIs.</p>
  </div>
</div>

           
            <div className="card w-96 border-2  shadow-xl mt-8">
  <figure><img src={mongodb} className='h-[300px]' /></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-400 text-2xl">
    Database Integration    </h2>
    <p> Expertise in integrating and working with databases like Firebase and MongoDB.</p>
  </div>
</div>

           

           
            <div className="card w-96 border-2  shadow-xl mt-8">
  <figure><img src={firebase} className='h-[300px]' /></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-400 text-2xl">
    Deployment and Hosting
           </h2>
    <p> Deploying web applications on platforms like Firebase Hosting ,Vercel , Surge ,  Natlify for seamless user access.</p>
  </div>
</div>

           
           
            </div>
        </div>
    );
};

export default Services;