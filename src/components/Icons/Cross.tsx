import React, { FC } from "react";

interface Props {
  size?: number | string;
  pointer?: boolean;
  onClick?: () => void;
}

const Cross: FC<Props> = ({ size = 16, pointer, onClick }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: `${pointer && "pointer"}` }}
    >
      <path
        d="M14.5 1.50014L1 15M1.00004 1.5L14.5 14.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cross;
