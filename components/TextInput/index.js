import React from 'react';

const TextInput = ({ text, setText, placeholder = '', isAutoFocus = true, required = false, upperCase = false, requiredMsg = "Required", check = false }) => {
    return (
        <div className="flex flex-col mb-4">
            <input className="border border-gray-400 py-2 px-3 text-grey-darkest" 
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