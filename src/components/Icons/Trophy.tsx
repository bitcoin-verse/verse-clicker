import React, { FC } from "react";

interface Props {
  size?: number | string;
}

const Trophy: FC<Props> = ({ size = 12 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.814 0H3.186V5.14253C3.186 6.73395 4.44587 8.02406 6 8.02406C7.55413 8.02406 8.814 6.73395 8.814 5.14253V0Z"
        fill="currentColor"
      />
      <path
        d="M1.9875 1.728H0C0 3.29794 0.800041 4.67653 2.00541 5.4596C1.99356 5.33097 1.9875 5.20061 1.9875 5.0688V1.728Z"
        fill="currentColor"
      />
      <path
        d="M9.99459 5.4596C10.0064 5.33097 10.0125 5.20061 10.0125 5.0688V1.728H12C12 3.29794 11.2 4.67653 9.99459 5.4596Z"
        fill="currentColor"
      />
      <path
        d="M6 9.1776C5.71721 9.1776 5.44126 9.14764 5.175 9.09066V10.1184C5.175 10.585 4.80564 10.9632 4.35 10.9632C3.79081 10.9632 2.7375 11.4274 2.7375 12H9.2625C9.2625 11.4274 8.20919 10.9632 7.65 10.9632C7.19437 10.9632 6.825 10.585 6.825 10.1184V9.09066C6.55874 9.14764 6.28279 9.1776 6 9.1776Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Trophy;
