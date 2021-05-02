import React from "react";

const Card = (props) => {
    return (
        <div className=" w-2/5 bg-gray-200 pt-8 pb-4 pl-16 rounded-lg shadow-xl ring-4 ring-green-200 items-center  justify-center p-5">
            {props.children}
        </div>
    );
};

export default Card;
