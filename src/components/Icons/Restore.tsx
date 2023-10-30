import React, { FC } from "react";

interface Props {
  size?: number | string;
}

const Sound: FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.11025 19.808C5.70336 18.628 5.48241 17.3614 5.48241 16.0432C5.48241 9.66745 10.651 4.4989 17.0267 4.4989C23.4024 4.4989 28.571 9.66745 28.571 16.0432C28.571 22.4189 23.4024 27.5874 17.0267 27.5874C14.3432 27.5874 11.8735 26.6718 9.91308 25.1359M2 15.9198L6.1796 20.309L10.3596 15.9198M16.6447 9.3824V16.6825L21.6953 19.8656"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sound;
