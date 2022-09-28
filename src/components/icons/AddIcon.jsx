import React from 'react';
export default function AddIcon({ size = 40, styleClass = "icon" }) {
  return (
    <svg
      height={size}
      width={size}
      viewBox={`0 0 50 50`}
      className={styleClass}
    >
      <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
    </svg>
  );
}
