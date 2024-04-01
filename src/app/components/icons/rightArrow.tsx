import React, { type FC } from "react";
import type { SquaredIconProps } from "./types";

export const RightArrowIcon: FC<SquaredIconProps> = ({
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
      <clipPath id="clip-Right">
        <rect width="13" height="22" />
      </clipPath>
    </defs>
    <g id="Right" clipPath="url(#clip-Right)">
      <g
        id="Group_2648"
        data-name="Group 2648"
        transform="translate(-1199 -563)"
      >
        <g
          id="Group_1040"
          data-name="Group 1040"
          transform="translate(1201 582.095) rotate(-90)"
        >
          <path
            id="Path_33"
            data-name="Path 33"
            d="M16.92.177a.6.6,0,0,0-.854,0L8.556,7.7,1.031.177a.6.6,0,1,0-.854.854L8.114,8.968a.59.59,0,0,0,.427.177.615.615,0,0,0,.427-.177l7.937-7.937A.592.592,0,0,0,16.92.177Z"
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
