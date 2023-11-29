import React, { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"svg"> {
  size?: string | number;
}

const External: FC<Props> = ({ size = 32, ...rest }) => {
  return (
    <svg
      data-icon="external"
      viewBox="0 0 13 12"
      fill="none"
      width={size}
      height={size}
      {...rest}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M11.3991 0.943893L5.2627 7.08026"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.44038 0.943851L1.44037 11.2894"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3984 11.2894H1.43951"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3985 5.0348V0.943893H7.30762"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0.416016)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default External;
