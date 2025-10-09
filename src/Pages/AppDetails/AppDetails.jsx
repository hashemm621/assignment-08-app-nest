import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAppsData from '../../Hooks/useAppsData';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'
import reviewsIcon from '../../assets/icon-review.png'
import Page404 from '../Page404/Page404';
import { getAppData, setAppData } from '../../Utils/localStorage';
import { Bounce, ToastContainer } from 'react-toastify';

const AppDetails = () => {
    const {id} = useParams();
    const { appsData, loading,error } = useAppsData();
    const [isInstall,setIsInstall] = useState(false)


    const app = appsData.find(data => data.id === Number(id))

    

    


    useEffect(() => {
  if (!app) return; 
  const installedApps = getAppData();
  const isInstalled = installedApps.some(a => a.id === app.id);
  setIsInstall(isInstalled);
}, [app]);


    if(loading) return <p>loading..........</p>
    if(error) return <Page404/>
        const {companyName,description,downloads,image,ratingAvg,ratings,reviews,size,title} = app




    const handleInstall = app => {
        setAppData(app)
        setIsInstall(true)
    }

    return (
        <div className='bg-[#D2D2D240]'>
            <div className="max-w-7xl py-20 mx-auto px-5">
                <div className='mb-20 flex flex-col md:flex-row gap-8 border-b pb-8 border-[#627382]'>
                    <img src={image} alt="apps image" />
                    <div className='w-full'>
                        <h1 className='text-3xl font-bold'>{title}</h1>
                        <p className='text-[#627382] pb-5 border-b border-[#627382] text-xl'>Developed By: <span className='text-[#632EE3]'>{companyName} </span></p>
                        <div className='mt-5 flex items-center gap-10'>
                            <div>
                             <img className='w-[40px] h-[40px]' src={downloadIcon} alt="" />
                             <p className='py-2'>Downloads</p>
                             <h2 className='font-extrabold text-4xl'>{downloads} </h2>

                        </div>
                            <div>
                             <img className='w-[40px] h-[40px]' src={ratingsIcon} alt="" />
                             <p className='py-2'>Average Ratings</p>
                             <h2 className='font-extrabold text-4xl'>{ratingAvg} </h2>

                        </div>
                            <div>
                             <img className='w-[40px] h-[40px]' src={reviewsIcon} alt="" />
                             <p className='py-2'>Total Reviews</p>
                             <h2 className='font-extrabold text-4xl'>{reviews} </h2>

                        </div>
                        </div>
                        <button onClick={()=> handleInstall(app)} disabled={isInstall} className='btn bg-[#00D390] rounded-xl mt-3 text-white py-3 px-5'>Install Now ({size}MB)</button>
                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
        </div>
    );
};

export default AppDetails;