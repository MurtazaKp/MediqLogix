import React, { type FC } from "react";
import type { SquaredIconProps } from "./types";

export const YoutubeIcon: FC<SquaredIconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="23"
    viewBox="0 0 24 23"
    className={className}
  >
    <defs>
      <clipPath id="clip-Youtube">
        <rect width="24" height="23" />
      </clipPath>
    </defs>
    <g id="Youtube" clip-path="url(#clip-Youtube)">
      <g
        id="Group_1017"
        data-name="Group 1017"
        transform="translate(-2080.586 -6871.448)"
      >
        <path
          id="Path_187"
          data-name="Path 187"
          d="M21.1,10.552A10.552,10.552,0,1,1,10.552,0,10.552,10.552,0,0,1,21.1,10.552"
          transform="translate(2081.586 6872.448)"
          fill="#fff"
        />
        <path
          id="Path_186"
          data-name="Path 186"
          d="M36.275,37.538a1.762,1.762,0,0,0-1.244-1.244,42.034,42.034,0,0,0-5.5-.294,42.034,42.034,0,0,0-5.5.294,1.762,1.762,0,0,0-1.244,1.244,19.645,19.645,0,0,0,0,6.772,1.762,1.762,0,0,0,1.244,1.244,42.035,42.035,0,0,0,5.5.294,42.035,42.035,0,0,0,5.5-.294,1.762,1.762,0,0,0,1.244-1.244,19.645,19.645,0,0,0,0-6.772m-8.147,5.5V38.814l3.655,2.11Z"
          transform="translate(2062.604 6842.076)"
        />
      </g>
    </g>
  </svg>
);
