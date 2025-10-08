import React from 'react';
import Banner from '../../Components/Banner/Banner';
import useAppsData from '../../Hooks/useAppsData';
import App from '../../Components/App/App';
import { Link } from 'react-router';

const Home = () => {
    const { appsData, loading, error } = useAppsData();
    
    // console.log(appsData,loading,error);
    const apps = appsData.slice(0,8)
    
    return (
        <div>
            <Banner/>

            <div className='mt-[570px] md:mt-72 px-5'>
                <h2 className='font-bold text-5xl text-center'>Trending Apps</h2>
                <p className='text-xl mt-4 mb-10 text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 max-w-7xl mx-auto'>
                
            {
                loading? 'loading....': apps.map(app => <App key={app.id} app={app}></App>)
            }
            </div>
            
            <div className='flex justify-center items-center pt-10 pb-20'>
                <Link
            to={"/apps"}
            
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"
          >
             Show All
          </Link>
            </div>

        </div>
    );
};

export default Home;