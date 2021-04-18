import React from "react";

const TopItem = ({ imageUrl, date, title,id}) => {
    return (
        <div key={id} className="flex flex-col-reverse ml-1 mr-1 h-96 w-8/12 shadow-md hover:shadow-lg  rounded-2xl  ">
        <div className=" z-10 relative  overflow-hidden rounded-2xl ">
        <img src={imageUrl} className=" rounded-lg bg-gray-800 text-gray-100 scale-100 transform hover:transition duration-500 hover:scale-150" />
        </div>

            <div className="absolute flex-start m-6  z-30">
                <div className="flex flex-row items-center mt-2">
        <svg class="h-6" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 mt-1 text-lg font-serif text-yellow-100 hover:text-green-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="ml-1 mt-1 text-sm font-serif text-yellow-100 hover:text-green-100">{date}</span>
        </div>
                <h1 className="ml-2 font-bold text-2xl text-white hover:text-red-500">{title}</h1>
            </div>
        </div>
    );
};

export default TopItem;
