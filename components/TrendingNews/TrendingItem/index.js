import React from 'react'

const TrendingItem = ({ onClick, imageUrl, date, title,id }) => {
  let sqlDate = new Date(date);
  //alert(sqlDate.getDay())
    return (
      <div key={id}  className="flex  flex-col mb-4 justify-between ml-2 h-auto w-96 " onClick= {onClick}>
        <div className="flex flex-row h-28 w-full  mb-1" >
          <img src={imageUrl} className="rounded-lg mt-2 h-28 w-28 hover:opacity-70 " />
        <div className="flex flex-col ml-2 mt-5 pr-1 pl-1 justify-start space-y-1  ">
        <div className="flex flex-row items-center mt-2">
        <svg class="h-6" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lg font-serif text-gray-600 hover:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="ml-1 items-center text-sm font-serif text-gray-500 hover:text-green-300">{date}</span>
        </div>
        <h1 className="ml-1 font-bold text-base from-gray-900 hover:text-red-500">{title}</h1>
        </div>
        </div>
        </div>
    )
}

export default TrendingItem


