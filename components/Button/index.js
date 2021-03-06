import React from 'react';

const Button = React.forwardRef(({ text, onClick },ref) => {
    return (
      <button
        type="submit"
        onClick={onClick}
        className="py-2 px-4 bg-green-500 text-white font-semibold cursor-pointer rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 m-2">
        {text}
      </button>
    );
  })

  export default Button;
  