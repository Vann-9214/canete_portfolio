// Action Buttons
import React from "react";

export function ActionButtons() {
  return (
    <div className="flex flex-row items-center w-fit gap-6 mt-[clamp(60px,44.64vh-297.14px,160px)]">
      <button className="px-8 py-4 rounded-full border-[1.5px] border-white bg-transparent text-[#2D3436] font-jakarta font-semibold text-[clamp(14px,1.5vw,18px)] transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
        View Projects
      </button>
      <button className="px-8 py-4 rounded-full bg-[#B9E2FE] text-[#2D3436] font-jakarta font-semibold text-[clamp(14px,1.5vw,18px)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        Get in Touch
      </button>
    </div>
  );
}
