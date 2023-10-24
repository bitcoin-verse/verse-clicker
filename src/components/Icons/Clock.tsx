import React, { FC } from "react";

interface Props {
  width?: number | string;
  height?: number | string;
}

const Clock: FC<Props> = ({ width = 24, height = 25 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 0.499756C9.6267 0.499756 7.30661 1.20355 5.3332 2.52214C3.3598 3.84072 1.82172 5.71488 0.913458 7.90761C0.00519947 10.1003 -0.232442 12.5132 0.230584 14.841C0.69361 17.1687 1.83651 19.307 3.51475 20.9852C5.19299 22.6634 7.33121 23.8063 9.659 24.2694C11.9868 24.7324 14.3996 24.4947 16.5923 23.5865C18.7851 22.6782 20.6592 21.1401 21.9778 19.1667C23.2964 17.1933 24.0002 14.8732 24.0002 12.4998C23.9967 9.31828 22.7314 6.26801 20.4816 4.0183C18.2319 1.76859 15.1817 0.503197 12.0001 0.499756V0.499756ZM17.2001 17.7209C17.0188 17.9128 16.7699 18.0266 16.5062 18.0381C16.2424 18.0497 15.9846 17.9582 15.7871 17.7829L10.8281 13.2369C10.7252 13.1435 10.6429 13.0298 10.5865 12.9029C10.53 12.776 10.5006 12.6387 10.5001 12.4998V6.99981C10.5001 6.73459 10.6054 6.48023 10.793 6.29269C10.9805 6.10516 11.2349 5.9998 11.5001 5.9998C11.7653 5.9998 12.0197 6.10516 12.2072 6.29269C12.3947 6.48023 12.5001 6.73459 12.5001 6.99981V12.0598L17.1341 16.3079C17.2314 16.3963 17.3103 16.5031 17.3663 16.622C17.4223 16.741 17.4542 16.8699 17.4604 17.0012C17.4665 17.1325 17.4467 17.2638 17.402 17.3875C17.3574 17.5111 17.2888 17.6248 17.2001 17.7219V17.7209Z"
        fill="#899BB5"
      />
    </svg>
  );
};


export default Clock;