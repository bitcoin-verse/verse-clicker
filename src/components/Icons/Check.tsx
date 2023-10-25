import React, { FC } from "react";

interface Props {
  size?: number | string;
}

const Check: FC<Props> = ({ size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 7.31429V8.00429C15.4991 9.62161 14.9754 11.1953 14.007 12.4907C13.0386 13.786 11.6775 14.7336 10.1265 15.1922C8.57557 15.6508 6.91794 15.5957 5.40085 15.0352C3.88376 14.4747 2.58849 13.4389 1.70822 12.0821C0.82795 10.7253 0.409843 9.12034 0.516258 7.50653C0.622672 5.89271 1.2479 4.35654 2.29871 3.1271C3.34951 1.89766 4.76959 1.04083 6.34714 0.684402C7.92469 0.327975 9.5752 0.491046 11.0525 1.14929M15.4999 2.0043L7.99995 9.5118L5.74995 7.2618"
        stroke="#00C48B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
