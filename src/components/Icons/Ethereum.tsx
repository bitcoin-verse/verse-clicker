/**
 * A functional component that renders Ethereum's icon as an SVG.
 *
 * @param {Object} props - The component props.
 * @param {number|string} [props.size=30] - The size of the icon in pixels or a valid CSS size value.
 * @returns {JSX.Element} The rendered SVG icon component.
 */
import React, { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

const Ethereum: FC<Props> = ({ size = 30, ...rest }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect y="0.347679" width="30" height="30" rx="15" fill="white" />
      <circle cx="15" cy="15.3477" r="15" fill="#627EEA" />
      <path
        d="M15.4669 4.09768V12.4133L22.4954 15.5539L15.4669 4.09768Z"
        fill="white"
        fillOpacity="0.602"
      />
      <path
        d="M15.4669 4.09768L8.4375 15.5539L15.4669 12.4133V4.09768Z"
        fill="white"
      />
      <path
        d="M15.4669 20.9427V26.593L22.5 16.8627L15.4669 20.9427Z"
        fill="white"
        fillOpacity="0.602"
      />
      <path
        d="M15.4669 26.593V20.9417L8.4375 16.8627L15.4669 26.593Z"
        fill="white"
      />
      <path
        d="M15.4669 19.6349L22.4954 15.5539L15.4669 12.4152V19.6349Z"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        d="M8.4375 15.5539L15.4669 19.6349V12.4152L8.4375 15.5539Z"
        fill="white"
        fillOpacity="0.602"
      />
    </svg>
  );
};

export default Ethereum;
