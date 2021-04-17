import React from 'react'

const TrendingItem = ({ onClick, imageUrl, date, title,id }) => {
  let sqlDate = new Date(date);
  //alert(sqlDate.getDay())
    return (
      <div key={id}  className="flex  flex-col mb-5 justify-start ml-2 h-auto w-96 " onClick= {onClick}>
        <div className="flex flex-row h-28 w-full" >
        {/* <div className="h-40 w-24"> */}
          <img src={imageUrl} className="rounded-lg mt-4 h-28 w-28 hover:opacity-70 " />
        {/* </div> */}
        <div className="flex flex-col ml-2 mt-2 pr-1 pl-1 justify-start space-y-1  ">
        <span className="ml-1 mt-3 text-sm font-serif text-gray-500"><i className="fa"></i>{date}</span>
        <h1 className="ml-1 font-bold text-base from-gray-900 hover:text-red-500">{title}</h1>
        </div>
        </div>
        </div>
    )
}

export default TrendingItem


