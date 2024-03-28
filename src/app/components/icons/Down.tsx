import React, { type FC } from "react";
import type { SquaredIconProps } from "./types";

export const DownArrowIcon: FC<SquaredIconProps> = ({
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
      <clipPath id="clip-Down">
        <rect width="15" height="9" />
      </clipPath>
    </defs>
    <g id="Down" clip-path="url(#clip-Down)">
      <g
        id="Group_2692"
        data-name="Group 2692"
        transform="translate(0.774 0.91)"
      >
        <path
          id="Path_33"
          data-name="Path 33"
          d="M13.458.141a.481.481,0,0,0-.679,0L6.8,6.126.82.141A.48.48,0,0,0,.141.82L6.454,7.133a.469.469,0,0,0,.34.141.489.489,0,0,0,.34-.141L13.446.82A.471.471,0,0,0,13.458.141Z"
          transform="translate(0)"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);
