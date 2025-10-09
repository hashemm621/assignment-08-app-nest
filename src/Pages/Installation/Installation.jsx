import React, { useEffect, useState } from "react";
import Page404 from "../Page404/Page404";
import { deleteAppData, getAppData } from "../../Utils/localStorage";
import SortedApps from "../../Components/SortedApps/SortedApps";
import { Bounce, ToastContainer } from "react-toastify";

const Installation = () => {
  const [apps, setApps] = useState([]);

  const [selectSort, setSelectSort] = useState("acc");

  useEffect(() => {
    setApps(getAppData());
  }, []);

  if (!apps) return <Page404 />;

  const handleUninstall = (id) => {
    deleteAppData(id);
    setApps((prev) => prev.filter((app) => app.id !== id));
  };

  const sortedApps = [...apps].sort((a, b) => {
    if (selectSort === "acc") return b.downloads - a.downloads;
    return a.downloads - b.downloads;
  });

  return (
    <div className="bg-[#D2D2D240]">
      <div className="max-w-7xl py-20 mx-auto px-5">
        <div>
          <h1 className="font-bold text-5xl text-center mb-4">
            Your Installed Apps ({apps.length})
          </h1>
          <p className="text-[#627382] text-xl text-center ">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-2xl font-semibold">
            Installed Apps ({sortedApps.length}){" "}
          </h2>
          <select
            value={selectSort}
            onChange={(e) => setSelectSort(e.target.value)}
            className="select  w-[200px]"
          >
            <option value={"acc"}>High-Low</option>
            <option value={"dec"}>Low-High</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-6">
          {sortedApps.length > 0 ? (
            sortedApps.map((app) => (
              <SortedApps
                key={app.id}
                handleUninstall={handleUninstall}
                app={app}
              ></SortedApps>
            ))
          ) : (
            <h2 className="text-5xl text-center font-bold">
              No Apps Installed Now
            </h2>
          )}
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

export default Installation;
