import React from "react";

const InfoAlert = ({ type = "info", icon, title, children }) => {
  // Configure styles based on alert type
  const alertStyles = {
    info: {
      bg: "bg-blue-900",
      border: "border-blue-500",
      iconColor: "text-blue-500",
      titleColor: "text-blue-300",
    },
    warning: {
      bg: "bg-gray-800",
      border: "border-orange-500",
      iconColor: "text-orange-500",
      titleColor: "text-orange-300",
    },
    error: {
      bg: "bg-red-900",
      border: "border-red-500",
      iconColor: "text-red-500",
      titleColor: "text-red-300",
    },
    success: {
      bg: "bg-green-900",
      border: "border-green-500",
      iconColor: "text-green-500",
      titleColor: "text-green-300",
    },
  };

  const styles = alertStyles[type] || alertStyles.info;

  // Default icons for each type
  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    error: "❌",
    success: "✅",
  };

  // Use provided icon or default for the type
  const displayIcon = icon || icons[type];

  return (
    <div
      className={`${styles.bg} border-l-4 ${styles.border} p-4 rounded-r mb-6`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <span className={`${styles.iconColor} text-xl`}>{displayIcon}</span>
        </div>
        <div className="ml-4">
          {title && (
            <p className={`${styles.titleColor} font-semibold mb-1`}>{title}</p>
          )}
          <div className="text-sm text-gray-300">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoAlert;
