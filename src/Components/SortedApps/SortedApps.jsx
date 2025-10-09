import React from "react";
import downImage from "../../assets/icon-downloads.png";
import starImage from "../../assets/icon-ratings.png";

const SortedApps = ({ app, handleUninstall }) => {
  const { title, image, downloads, ratingAvg, size, id } = app;
  return (
    <div className="bg-white p-5 rounded-xl hover:scale-105 transition-all">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img className="w-[80px] h-[80px] rounded-xl" src={image} alt="" />

          <div>
            <h2 className="font-medium text-xl">{title} </h2>
            <div className="flex items-center mt-4 gap-3">
              <span className="flex items-center gap-2 text-green-600 font-medium">
                <img className="w-4 h-4" src={downImage} alt="" />{" "}
                <span>{downloads}</span>
              </span>
              <span className="flex items-center gap-2 text-[#FF8811] font-medium">
                <img className="w-4 h-4" src={starImage} alt="" />{" "}
                <span>{ratingAvg}</span>
              </span>
              <p className="text-[#627382]">{size}MB </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleUninstall(id)}
          className="btn bg-[#00D390] rounded-lg text-white hover:skew-2 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition-all"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default SortedApps;
