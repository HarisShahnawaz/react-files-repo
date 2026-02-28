import React, { useId } from "react"; // ✅ Import useId

function Select(
  { options = [], label, className = "", ...props }, 
  ref
) {
  const id = useId(); // Generate unique ID for the select

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 border rounded-lg bg-white text-black
                    outline-none focus:bg-gray-50 duration-200 border-gray-200 w-full ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Wrap with forwardRef
export default React.forwardRef(Select);