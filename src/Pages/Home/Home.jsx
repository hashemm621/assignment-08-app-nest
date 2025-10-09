import React from "react";
import Banner from "../../Components/Banner/Banner";
import useAppsData from "../../Hooks/useAppsData";
import App from "../../Components/App/App";
import { Link } from "react-router";
import Page404 from "../Page404/Page404";


const Home = () => {
  const { appsData, loading, error } = useAppsData();

  const apps = appsData.slice(0, 8);

  return (
    <div>
      <Banner />
      

      <div className="mt-[570px] md:mt-72 px-5">
        <h2 className="font-bold text-5xl text-center">Trending Apps</h2>
        <p className="text-xl mt-4 mb-10 text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {loading && <p>loading.....</p>}
      {/* {error && (error.response && error.response.status === 404 ? <Page404/> : <p className="text-red-600 text-center text-3xl py-20">Something went wrong</p>)} */}
      {error && <Page404 />}
      {!loading && !error && apps.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 max-w-7xl mx-auto">
          {Array.isArray(apps) &&
            apps.map((app) => <App key={app.id} app={app} />)}
        </div>
      )}

      <div className="flex justify-center items-center pt-10 pb-20">
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
