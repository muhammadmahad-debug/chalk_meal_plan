import React from "react";

export const RightColumn = () => {
  return (
    <div className="w-full lg:w-1/2 ml-auto max-h-screen overflow-y-auto p-5 lg:p-10 mt-[75px] bg-[#1d1d1d] text-white">
      <h1>Meal Plan Upsell</h1>
      <span className="flex gap-2">
        <button className="w-40 p-3 rounded-md bg-[#ed803c] hover:bg-[#a25728] transition duration-150">
          Add to cart!
        </button>
        <button className="w-40 p-3 rounded-md bg-slate-500 hover:bg-slate-600 transition duration-150">
          No thanks
        </button>
      </span>
    </div>
  );
};
