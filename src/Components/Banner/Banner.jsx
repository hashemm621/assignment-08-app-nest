import React from "react";
import { Link } from "react-router";
import playStore from "../../assets/playStore.jpg";
import appStore from "../../assets/appStore.jpg";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="py-20 relative">
      <div className="max-w-7xl mx-auto p-5">
        <div className="text-center">
          <h1 className="font-bold text-6xl">
            We Build <br />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="mt-4 text-xl text-[#627382]">
            AppNest is your go-to platform to explore, discover, and download a
            wide range of apps. <br /> Check ratings, reviews, and app details
            all in one sleek, user-friendly interface
          </p>
          <div className="flex justify-center items-center gap-4 my-10">
            <Link
              to={"https://play.google.com/store/games?hl=en"}
              target="blank"
              className="btn py-5 px-5 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:text-white"
            >
              <img
                className="rounded w-12"
                src={playStore}
                alt="playStoreLogo"
              />{" "}
              <span className="font-semibold text-xl">Google Play</span>
            </Link>
            <Link
              to={"https://www.apple.com/app-store/"}
              target="blank"
              className="btn py-5 px-5 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:text-white"
            >
              <img
                className="rounded w-12"
                src={appStore}
                alt="playStoreLogo"
              />{" "}
              <span className="font-semibold text-xl">App Store</span>
            </Link>
          </div>
          <div className="">
            <img
              className="max-w-3/4 mx-auto"
              src={heroImg}
              alt="main-banner-image"
            />
          </div>
        </div>
      </div>
      <div className="py-14 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] absolute text-white w-full -mt-5">
        <h2 className="font-bold text-3xl md:text-5xl text-center mb-5">
          Trusted by Millions, Built for You
        </h2>
        <div className="max-w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-0">
          <div className="text-center">
            <p className="mb-4 text-gray-400">Total Downloads</p>
            <h3 className="font-extrabold text-4xl md:text-6xl">29.6M</h3>
            <p className="mt-4 text-gray-400">21% more than last month</p>
          </div>
          <div className="text-center">
            <p className="mb-4 text-gray-400">Total Reviews</p>
            <h3 className="font-extrabold text-4xl md:text-6xl">906K</h3>
            <p className="mt-4 text-gray-400">46% more than last month</p>
          </div>
          <div className="text-center">
            <p className="mb-4 text-gray-400">Active Apps</p>
            <h3 className="font-extrabold text-4xl md:text-6xl">132+</h3>
            <p className="mt-4 text-gray-400">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
