import React from "react";

const Input = ({ name, label, register, required, defaultValue }) => (
  <>
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 text-2xl">
        {label}
      </label>
      <input
        type="text"
        {...register(name, { required })}
        defaultValue={defaultValue}
        className="mt-1 focus:ring-indigo-500 px-3 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  </>
);

export default Input;
