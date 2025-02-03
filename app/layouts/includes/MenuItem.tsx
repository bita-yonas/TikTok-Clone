"use client";

import React from "react";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  color?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, color }) => {
  return (
    <div className="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md cursor-pointer">
      <div className="flex items-center lg:mx-0 mx-auto">
        <div className={`text-[${color}]`}>{icon}</div>
        <p
          className={`lg:block hidden pl-2 mt-0.5 font-semibold text-[17px] text-gray-600`}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
