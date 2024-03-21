import React, { type FC } from "react";
import type { SquaredIconProps } from "./types";

export const StarIcon: FC<SquaredIconProps> = ({
  size = 24,
  className = "",
  color = "#ffffff",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="19"
    height="18"
    viewBox="0 0 22 22"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectangle_511"
          data-name="Rectangle 511"
          width="19.719"
          height="18.779"
          fill={color}
          stroke={color}
          stroke-width="1"
        />
      </clipPath>
      <clipPath id="clip-Star">
        <rect width="22" height="22" />
      </clipPath>
    </defs>
    <g id="Star" clip-path="url(#clip-Star)">
      <g id="Group_1138" data-name="Group 1138" transform="translate(1 1)">
        <g id="Group_1137" data-name="Group 1137" clip-path="url(#clip-path)">
          <path
            id="Path_212"
            data-name="Path 212"
            d="M10.546.657l2.216,6.819h7.17a.228.228,0,0,1,.134.412l-5.8,4.214,2.216,6.819a.227.227,0,0,1-.35.254l-5.8-4.214-5.8,4.214a.227.227,0,0,1-.35-.254L6.395,12.1.594,7.888a.228.228,0,0,1,.134-.412H7.9L10.113.657a.228.228,0,0,1,.433,0"
            transform="translate(-0.47 -0.471)"
            fill={color}
            stroke={color}
            stroke-width="1"
          />
          <path
            id="Path_213"
            data-name="Path 213"
            d="M10.546.657l2.216,6.819h7.17a.228.228,0,0,1,.134.412l-5.8,4.214,2.216,6.819a.227.227,0,0,1-.35.254l-5.8-4.214-5.8,4.214a.227.227,0,0,1-.35-.254L6.395,12.1.594,7.888a.228.228,0,0,1,.134-.412H7.9L10.113.657A.228.228,0,0,1,10.546.657Z"
            transform="translate(-0.47 -0.471)"
            fill={color}
            stroke={color}
            stroke-miterlimit="10"
            stroke-width="1"
          />
        </g>
      </g>
    </g>
  </svg>
);
