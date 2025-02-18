import React from "react";

const Tab = () => {
  return (
    <div>
      <a
        href="#_"
        class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-blue-800 rounded-lg group"
      >
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span class="relative">Button Text</span>
      </a>
    </div>
  );
};

export default Tab;
