import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    ...props
  },
  ref
) {
  const id = useId(); // ✅ FIXED

  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block mb-1 pl-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        ref={ref}
        className={`px-3 py-2 border rounded-lg bg-white text-black
        outline-none focus:bg-gray-50 duration-200
        border-gray-200 w-full ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;