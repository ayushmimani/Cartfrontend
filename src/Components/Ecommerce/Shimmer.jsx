import React from "react";

const Shimmer = () => {
  return (
    <div className="animate-pulse bg-gray-200 p-4 rounded-lg shadow-md w-64 h-80 flex flex-col">
      {/* Image Placeholder */}
      <div className="bg-gray-300 h-40 w-full rounded-md mb-4"></div>
      {/* Text Placeholder */}
      <div className="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
    </div>
  );
};

export default Shimmer;
