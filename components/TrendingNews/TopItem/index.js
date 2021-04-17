import React from "react";

const TopItem = ({ imageUrl, date, title,id}) => {
    return (
        <div key={id} className="flex flex-col-reverse  ml-6 mr-4 relative h-auto w-7/12">
            <img src={imageUrl} className=" rounded-lg bg-gray-800 hover:opacity-80 text-gray-100 h-96 w-full " />
            <div className="absolute flex-start m-6">
                <span className="ml-1 mt-1 text-base font-serif text-yellow-100">
                    <i className="fa"></i>
                    {date}
                </span>
                <h1 className="ml-1 font-bold text-lg text-white hover:text-red-500">{title}</h1>
            </div>
        </div>
    );
};

export default TopItem;
