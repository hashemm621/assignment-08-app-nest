import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>

            <main className='bg-[#D2D2D240]'>
                <Outlet/>
            </main> 

        </>
    );
};

export default Root;