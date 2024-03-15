/**
 * A functional component that renders a chevron icon as an SVG.
 *
 * @param {Object} props - The component props.
 * @param {number|string} [props.size=20] - The size of the icon in pixels or a valid CSS size value.
 * @param {number} [props.rotateDeg=0] - The rotation angle of the icon in degrees.
 * @returns {JSX.Element} The rendered SVG icon component.
 */
import React, { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
  rotateDeg?: number;
}

const Chevron: FC<Props> = ({ size = 20, rotateDeg = 0, ...rest }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotateDeg}deg)` }}
      {...rest}
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

export default Chevron;
