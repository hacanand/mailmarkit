import React from "react";

const Benefits = () => {
  return (
    <div className="benefit-cover min-h-[60vh] max-md:text-balance relative flex items-center justify-center">
      <div className="w-[70%] h-fit bg-[#f7f5ff] border-[2px]  rounded border-blue-500 p-6">
        <h3 className="font-clashDisplay uppercase text-3xl md:text-7xl text-center">
          EVERYTHING YOU NEED TO
          <span className="font-style">Succeed</span>
          <br />
          available in a single platform
        </h3>
        <p className="text-xl md:text-2xl text-center">
          Add in your own website. No Complex integration
        </p>
      </div>
    </div>
  );
};

export default Benefits;
