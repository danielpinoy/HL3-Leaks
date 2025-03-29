import React from "react";

const LoadingSpinner = ({
  size = "medium",
  color = "orange",
  text = "Loading...",
}) => {
  // Determine size class
  const sizeClass =
    {
      small: "w-4 h-4 border-2",
      medium: "w-8 h-8 border-3",
      large: "w-12 h-12 border-4",
    }[size] || "w-8 h-8 border-3";

  // Determine color class
  const colorClass =
    {
      orange: "border-orange-500",
      blue: "border-blue-500",
      white: "border-white",
    }[color] || "border-orange-500";

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className={`${sizeClass} border-t-transparent rounded-full animate-spin ${colorClass}`}
      ></div>
      {text && <p className="mt-2 text-gray-400 text-sm">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
