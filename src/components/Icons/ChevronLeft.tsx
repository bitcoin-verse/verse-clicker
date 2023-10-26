import React, { FC } from "react";

interface Props {
  size?: number | string;
  flip?: boolean;
}

const ChevronLeft: FC<Props> = ({ size = 20, flip = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `${flip ? "rotate(180deg)" : "none"}` }}
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeft;
