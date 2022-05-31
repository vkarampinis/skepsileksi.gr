import React from "react";

const headerClassMap = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base",
};

export default function H({ size, className = "", children }) {
  return React.createElement(
    `h${size}`,
    { className: `${headerClassMap[size]} font-bold ${className}` },
    children
  );
}
