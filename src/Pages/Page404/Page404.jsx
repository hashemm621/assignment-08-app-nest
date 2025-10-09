import React from 'react';
import image404 from '../../assets/pageNotFound.jpg'
import {  useNavigate } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Page404 = () => {
    const navigate = useNavigate()
    return (
        
<div className='flex flex-col min-h-screen'>
            <header className='flex-none'>
                <Navbar/>
            </header>

            <main className='flex-grow bg-[#D2D2D240]'>
                <div className='bg-[#D2D2D240] flex flex-col justify-center items-center py-20'>
            <div className='mb-10'>
                <img src={image404} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <h1 className='font-bold text-5xl'>Oops, page not found!</h1>
            <p className='font-xl text-[#627382]'>The page you are looking for is not available.</p>
            <button
            
            onClick={() => navigate(-1)}
            
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"
          >
             Go Back
          </button>
            </div>
        </div>
            </main>

            <footer className='flex-none'>
                <Footer/>
            </footer>

        </div>
    );
};

export default Page404;




