import { Search } from "lucide-react";
import React, { useState } from "react";
import useAppsData from "../../Hooks/useAppsData";
import AllApps from "../../Components/AllApps/AllApps";
import Page404 from "../Page404/Page404";
import AppsNotFound from "../AppsNotFound/AppsNotFound";

const Apps = () => {
    
  const { appsData, loading, error } = useAppsData();
  const [search,setSearch] = useState('')


  const cleanSearch = search.trim().toLowerCase()
  const searchedApps = cleanSearch? appsData.filter(app => app.title.toLowerCase().includes(cleanSearch)): appsData
    
  return (
    <div className="py-20 bg-[#D2D2D240]">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <h2 className="text-4xl font-bold text-center md:text-5xl">
            Our All Applications
          </h2>
          <p className="text-xl mt-4 text-[#627382] text-center">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>

          <div className="mt-10 mb-5 flex justify-between items-center">
            <h3 className="text-2xl font-semibold">({searchedApps.length}) Apps Found</h3>

            <div className="input bg-[#D2D2D240] rounded-xl text-[#627382] py-3 px-5">
              <Search />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="ml-2 w-full focus:outline-none"
                type="search"
                name="search"
                placeholder="Search Apps"
              />
            </div>
          </div>
        </div>

        {loading && <p>loading.....</p>}
        {error && (error.response && error.response.status === 404 ? <Page404/> : <p className="text-red-600 text-center text-3xl py-20">Something went wrong</p>)}
        {!loading && !error && searchedApps.length === 0 && <AppsNotFound/>}

        
        {!loading && !error && searchedApps.length > 0 && (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {searchedApps.map((app) => (
        <AllApps key={app.id} app={app} />
      ))}
    </div>
  )}
      </div>
    </div>
  );
};

export default Apps;
