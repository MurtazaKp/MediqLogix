import React, { type FC } from "react";
import type { SquaredIconProps } from "./types";

export const UpArrowIcon: FC<SquaredIconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="15"
    height="9"
    viewBox="0 0 15 9"
  >
    <defs>
      <clipPath id="clip-Up">
        <rect width="15" height="9" />
      </clipPath>
    </defs>
    <g id="Up" clip-path="url(#clip-Up)">
      <g
        id="Group_2692"
        data-name="Group 2692"
        transform="translate(0.774 0.91)"
      >
        <path
          id="Path_33"
          data-name="Path 33"
          d="M13.458,7.133a.481.481,0,0,1-.679,0L6.8,1.148.82,7.133a.48.48,0,0,1-.679-.679L6.454.141A.469.469,0,0,1,6.793,0a.489.489,0,0,1,.34.141l6.313,6.313A.471.471,0,0,1,13.458,7.133Z"
          transform="translate(0 0)"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);
