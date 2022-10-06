import React from "react";
export default function CloseIcon({ size = 40, styleClass = "icon" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox={`0 0 50 50`}
      className={styleClass}
    >
      <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
    </svg>
  );
}
