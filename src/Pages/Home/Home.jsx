import React from 'react';
import Banner from '../../Components/Banner/Banner';
import useAppsData from '../../Hooks/useAppsData';

const Home = () => {
    const { appsData, loading, error } = useAppsData();
    
    console.log(appsData,loading,error);
    const apps = appsData.slice(0,8)
    console.log(apps);
    return (
        <div>
            {
                loading? 'loading....':<Banner/>
            }
            

        </div>
    );
};

export default Home;