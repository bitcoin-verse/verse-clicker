/**
 * A functional component that renders a small verse icon as an SVG.
 *
 * @param {Object} props - The component props.
 * @param {number|string} [props.w=44] - The width of the icon in pixels or a valid CSS size value.
 * @param {number|string} [props.h=49] - The height of the icon in pixels or a valid CSS size value.
 * @returns {JSX.Element} The rendered SVG icon component.
 */
import React, { FC } from "react";

interface VerseMoonProps extends React.SVGProps<SVGSVGElement> {}

const VerseMoon: FC<VerseMoonProps> = ({ ...rest }) => {
  return (
    <svg
      viewBox="0 4 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g filter="url(#filter0_dd_1369_4498)">
        <circle cx="22" cy="24.3477" r="11.8857" fill="url(#paintBlueCircle)" />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.8236 23.1258C33.2119 29.116 28.1517 33.7896 22 33.7896C15.8482 33.7896 10.788 29.116 10.1763 23.1258C10.1353 23.5275 10.1143 23.9351 10.1143 24.3477C10.1143 30.912 15.4357 36.2334 22 36.2334C28.5643 36.2334 33.8857 30.912 33.8857 24.3477C33.8857 23.9351 33.8647 23.5275 33.8236 23.1258Z"
          fill="#086BC6"
        />
        <ellipse
          opacity="0.4"
          cx="28.5225"
          cy="17.1559"
          rx="0.259191"
          ry="0.25919"
          fill="#086BC6"
        />
        <ellipse
          opacity="0.5"
          cx="11.151"
          cy="23.0987"
          rx="0.25919"
          ry="0.25919"
          fill="#086BC6"
        />
        <ellipse
          opacity="0.5"
          cx="19.1859"
          cy="16.2758"
          rx="0.703516"
          ry="0.703516"
          fill="#086BC6"
        />
        <ellipse
          opacity="0.5"
          cx="16.169"
          cy="30.1282"
          rx="1.66622"
          ry="1.66622"
          fill="#086BC6"
        />
        <mask
          id="mask0_1369_4498"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="10"
          y="12"
          width="24"
          height="25"
        >
          <circle cx="22" cy="24.3477" r="11.8857" fill="#0085FF" />
        </mask>
        <g mask="url(#mask0_1369_4498)">
          <ellipse
            opacity="0.5"
            cx="26.7024"
            cy="14.9058"
            rx="2.07352"
            ry="2.07352"
            fill="#0085FF"
          />
          <circle
            opacity="0.5"
            cx="10.5956"
            cy="21.5336"
            r="1.14784"
            fill="#0085FF"
          />
        </g>
        <ellipse
          opacity="0.5"
          cx="29.1092"
          cy="23.0147"
          rx="0.555407"
          ry="0.555408"
          fill="#086BC6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6708 26.9345C22.4083 27.3895 21.635 27.5932 21.3725 27.1382C20.2789 25.2426 18.9948 23.0168 18.2199 21.6736C17.9084 21.1336 18.2986 20.4598 18.922 20.4598H20.9902C21.2299 20.4598 21.4513 20.5877 21.5711 20.7953L21.5794 20.8096C21.8338 21.2504 21.5157 21.8012 21.0068 21.8012C20.4976 21.8012 20.1796 22.3527 20.4346 22.7934L22.5532 26.455C22.6753 26.6661 22.7926 26.7233 22.6708 26.9345ZM22.4068 24.9611C22.7188 25.5009 23.4981 25.5006 23.8096 24.9605L25.8166 21.4817C26.0787 21.0275 25.7509 20.4598 25.2264 20.4598C24.9827 20.4598 24.7576 20.59 24.636 20.8012L23.5602 22.6693C23.3586 23.0195 22.8534 23.02 22.6511 22.6701C22.5573 22.5078 22.3841 22.4079 22.1967 22.4079H22.1078C21.5849 22.4079 21.2582 22.9741 21.5199 23.4268L22.4068 24.9611Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1369_4498"
          x="-4"
          y="-3.65232"
          width="52"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0653125 0 0 0 0 0.402077 0 0 0 0 0.7125 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1369_4498"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1369_4498"
            result="effect2_dropShadow_1369_4498"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1369_4498"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paintBlueCircle"
          x1="22"
          y1="12.462"
          x2="22"
          y2="36.2334"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0EBEF0" />
          <stop offset="1" stopColor="#0085FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VerseMoon;
