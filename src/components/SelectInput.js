import React from "react";

const options = ["normal", "high", "low"];

const Select = ({ register, label, name, ...rest }) => (
  <>
    <div className="w-6/12 ">
      <label className="block text-sm font-medium text-gray-700 text-2xl">
        {label}
      </label>
      <select
        {...register(name)}
        {...rest}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  </>
);

export default Select;
