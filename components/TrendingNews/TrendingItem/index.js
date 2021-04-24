import React from "react";
import Link from "next/link";
const TrendingItem = ({ imageUrl, date, title, id, posturl }) => {
    return (
        <Link href={posturl} passHref={true}>
        <div
            key={id}
            className="flex  cursor-pointer flex-col m-2 p-2 border h-auto w-full md:w-96 lg:w-96 shadow-md hover:shadow-lg rounded-xl"
        >
            <div className="flex flex-row h-20 w-full my-1 ">
            <div className=" w-1/5">
            <img src={imageUrl} className="rounded-xl object-cover hover:opacity-70 p-1 h-full w-full overflow-hidden" />
            </div>
                
                <div className="flex flex-col w-4/5 justify-start overflow-hidden">
                    <div className="flex flex-row items-center mt-2">
                        <svg
                            class="h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-lg font-serif text-gray-600 hover:text-green-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="{2}"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="ml-1 items-center text-xs md:text-base lg:text-base font-serif text-gray-500 hover:text-green-300">{date}</span>
                    </div>
                    <h1 className="ml-1 text-xs md:text-base lg:text-base font-bold md:font-bold tmd:text-sm from-gray-900 hover:text-red-500">
                        {title.length < 76 ? title : title.substr(0, 76) + "..."}
                    </h1>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default TrendingItem;