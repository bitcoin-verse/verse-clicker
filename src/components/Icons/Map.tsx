import React, { FC } from "react";

interface Props {
  size?: number | string;
}

const Info: FC<Props> = ({ size = 12 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 14L6 12.6L2.9 13.8C2.67778 13.8889 2.47222 13.8639 2.28333 13.725C2.09444 13.5861 2 13.4 2 13.1667V3.83333C2 3.68889 2.04167 3.56111 2.125 3.45C2.20833 3.33889 2.32222 3.25556 2.46667 3.2L6 2L10 3.4L13.1 2.2C13.3222 2.11111 13.5278 2.13611 13.7167 2.275C13.9056 2.41389 14 2.6 14 2.83333V12.1667C14 12.3111 13.9583 12.4389 13.875 12.55C13.7917 12.6611 13.6778 12.7444 13.5333 12.8L10 14ZM9.33333 12.3667V4.56667L6.66667 3.63333V11.4333L9.33333 12.3667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Info;
