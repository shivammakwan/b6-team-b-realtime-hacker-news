import React from 'react';

const TextInput = ({ text, setText, placeholder = '', isAutoFocus = true, required = false, upperCase = false, requiredMsg = "Required", check = false }) => {
    return (
        <div className="my-2 mx-2">
            <input className="bg-gray-100 rounded-md w-96 h-10 mb-1 text-left pl-4 text-2xl shadow-lg lg:text-sm"
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={({ target: { value } }) => {
                    setText(value);
                }}
                required={required}
            />
            {check ? (required && !text ? <div className="text-primary mx-8">{requiredMsg} </div> : null) : null}
        </div>
    );
}
export default TextInput;