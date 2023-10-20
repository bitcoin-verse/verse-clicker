import React, { FC } from "react";

interface Props {
  size?: number | string;
}

const Star: FC<Props> = ({ size = 72 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_304_15050)">
        <path
          d="M37.8645 17.1495L37.9117 17.243L42.0783 25.4978L50.1117 26.2936C50.5032 26.3279 50.877 26.4728 51.1895 26.7114C51.5043 26.952 51.7437 27.2777 51.8792 27.65C52.0147 28.0224 52.0406 28.4257 51.954 28.8124C51.8674 29.199 51.6717 29.5528 51.3903 29.8317L44.7391 36.4239L47.2062 45.3861C47.3093 45.7742 47.298 46.1838 47.1738 46.5656C47.0496 46.9475 46.8177 47.2853 46.506 47.5385C46.1944 47.7917 45.8162 47.9494 45.417 47.9928C45.0191 48.036 44.6172 47.9637 44.2593 47.7846L44.2558 47.7828L35.9998 43.6946L27.7556 47.7775L27.7526 47.779C27.3946 47.9583 26.9926 48.0307 26.5945 47.9874C26.1953 47.9441 25.8171 47.7863 25.5054 47.5332C25.1938 47.28 24.9619 46.9421 24.8376 46.5603C24.7134 46.1784 24.7022 45.7688 24.8052 45.3807L24.8076 45.372L27.2723 36.4188L20.6158 29.8263C20.3344 29.5474 20.1388 29.1937 20.0521 28.8071C19.9655 28.4204 19.9915 28.017 20.1269 27.6447C20.2624 27.2724 20.5018 26.9466 20.8167 26.7061C21.1291 26.4674 21.5029 26.3226 21.8944 26.2883L29.9276 25.4924L34.1376 17.1443C34.3131 16.8015 34.5799 16.5138 34.9084 16.3129C35.237 16.112 35.6146 16.0057 35.9997 16.0057C36.3848 16.0057 36.7625 16.112 37.091 16.3129C37.4196 16.5138 37.6863 16.8015 37.8618 17.1443L37.8645 17.1495Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_304_15050"
          x="0"
          y="0"
          width="72.0044"
          height="72.0049"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.784314 0 0 0 0 0.478431 0 0 0 0 0.117647 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_304_15050"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_304_15050"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Star;
