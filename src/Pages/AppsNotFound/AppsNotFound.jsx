import React from 'react';
import apps404 from '../../assets/App-Error.png'
import {  useNavigate } from 'react-router';

const AppsNotFound = () => {
    const navigate = useNavigate()
    return (
        
            <div className='flex flex-col justify-center items-center py-20'>
                    <div className='mb-10'>
                        <img src={apps404} alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <h1 className='font-bold text-5xl'>Oops, Apps not found!</h1>
                    <p className='font-xl text-[#627382]'>Please check this app name and try again</p>
                    <button
                    
                    onClick={() => navigate(-1)}
                    
                    className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"
                  >
                     Go Back
                  </button>
                    </div>
                </div>
        
    );
};

export default AppsNotFound;