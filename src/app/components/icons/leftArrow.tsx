import React, { type FC } from "react";
import type { SquaredIconProps } from "./types";

export const LeftArrowIcon: FC<SquaredIconProps> = ({
  size = 24,
  className = "",
  color = "#ffffff",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="13"
    height="22"
    viewBox="0 0 13 22"
  >
    <defs>
      <clipPath id="clip-Left">
        <rect width="13" height="22" />
      </clipPath>
    </defs>
    <g id="Left" clipPath="url(#clip-Left)">
      <g id="Group_2648" data-name="Group 2648" transform="translate(2 2)">
        <g
          id="Group_1040"
          data-name="Group 1040"
          transform="translate(0 17.095) rotate(-90)"
        >
          <path
            id="Path_33"
            data-name="Path 33"
            d="M16.92,8.968a.6.6,0,0,1-.854,0L8.556,1.443,1.031,8.968a.6.6,0,0,1-.854-.854L8.114.177A.59.59,0,0,1,8.541,0a.615.615,0,0,1,.427.177l7.937,7.937A.592.592,0,0,1,16.92,8.968Z"
            transform="translate(0)"
            fill="#fff"
            stroke="#fff"
            stroke-miterlimit="10"
            strokeWidth="1"
          />
        </g>
      </g>
    </g>
  </svg>
);
