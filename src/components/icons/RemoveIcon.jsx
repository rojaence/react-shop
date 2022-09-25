import React from 'react';
export default function AddIcon({ size = 40, styleClass = "icon" }) {
  return (
    <svg
      height={size}
      width={size}
      viewBox={`0 0 50 50`}
      className={styleClass}
    >
      <path d="M10 25.5v-3h28v3Z" />
    </svg>
  );
}
