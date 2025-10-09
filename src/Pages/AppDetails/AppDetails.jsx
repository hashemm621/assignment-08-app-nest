import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAppsData from "../../Hooks/useAppsData";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";
import Page404 from "../Page404/Page404";
import { getAppData, setAppData } from "../../Utils/localStorage";
import { Bounce, ToastContainer } from "react-toastify";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DetailLoading from "../../Components/DetailsLoading/DetailLoading";

const AppDetails = () => {
  const { id } = useParams();
  const { appsData, loading, error } = useAppsData();
  const [isInstall, setIsInstall] = useState(false);

  const app = appsData.find((data) => data.id === Number(id));

  useEffect(() => {
    if (!app) return;
    const installedApps = getAppData();
    const isInstalled = installedApps.some((a) => a.id === app.id);
    setIsInstall(isInstalled);
  }, [app]);

  if (loading) return  <DetailLoading/>;
  if (error) return <Page404 />;
  const {
    companyName,
    description,
    downloads,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = app;

  const handleInstall = (app) => {
    setAppData(app);
    setIsInstall(true);
  };

  const chartData =
    Array.isArray(ratings) && ratings.length > 0
      ? [...ratings].sort((a, b) => b.name.localeCompare(a.name))
      : [
          { name: "5★", value: 200 },
          { name: "4★", value: 150 },
          { name: "3★", value: 80 },
          { name: "2★", value: 30 },
          { name: "1★", value: 10 },
        ];

  return (
    <div className="bg-[#D2D2D240]">
      <div className="max-w-7xl py-20 mx-auto px-5">
        <div className="mb-20 flex flex-col md:flex-row gap-8 border-b pb-8 border-[#627382]">
          <img src={image} alt="apps image" />
          <div className="w-full">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-[#627382] pb-5 border-b border-[#627382] text-xl">
              Developed By:{" "}
              <span className="text-[#632EE3]">{companyName} </span>
            </p>
            <div className="mt-5 flex items-center gap-10">
              <div>
                <img className="w-[40px] h-[40px]" src={downloadIcon} alt="" />
                <p className="py-2">Downloads</p>
                <h2 className="font-extrabold text-4xl">{downloads} </h2>
              </div>
              <div>
                <img className="w-[40px] h-[40px]" src={ratingsIcon} alt="" />
                <p className="py-2">Average Ratings</p>
                <h2 className="font-extrabold text-4xl">{ratingAvg} </h2>
              </div>
              <div>
                <img className="w-[40px] h-[40px]" src={reviewsIcon} alt="" />
                <p className="py-2">Total Reviews</p>
                <h2 className="font-extrabold text-4xl">{reviews} </h2>
              </div>
            </div>
            <button
              onClick={() => handleInstall(app)}
              disabled={isInstall}
              className="btn bg-[#00D390] rounded-xl mt-3 text-white py-3 px-5"
            >
              {isInstall ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
        <div className="space-y-5 ">
          <h3 className="font-semibold text-2xl">Ratings</h3>
          <div className="bg-base-100 border-0 h-80 p-4 rounded-xl">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                layout="vertical"
                data={chartData}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />

                <Bar dataKey="count" barSize={20} fill="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-400 pt-5">
          <h2 className="text-xl font-semibold">Description</h2>

          <p className="mt-5 text-gray-500">{description} </p>
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
