import React, { type FC } from "react";
import type { SquaredIconProps } from "./types";

export const FacebookIcon: FC<SquaredIconProps> = ({
  size = 24,
  className = "",
  color = "#ffffff",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="23"
    viewBox="0 0 24 23"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectangle_39"
          data-name="Rectangle 39"
          width="22"
          height="22"
          transform="translate(-0.449 -0.449)"
          fill="#fff"
        />
      </clipPath>
      <clipPath id="clip-Facebook">
        <rect width="24" height="23" />
      </clipPath>
    </defs>
    <g id="Facebook" clip-path="url(#clip-Facebook)">
      <g
        id="Group_1016"
        data-name="Group 1016"
        transform="translate(-2052 -6871)"
      >
        <g
          id="Group_1014"
          data-name="Group 1014"
          transform="translate(2053.448 6872.448)"
        >
          <g id="Group_26" data-name="Group 26" clip-path="url(#clip-path)">
            <path
              id="Path_26"
              data-name="Path 26"
              d="M21.1,10.552A10.552,10.552,0,1,0,8.9,20.975V13.6H6.224v-3.05H8.9V8.227c0-2.644,1.575-4.105,3.986-4.105a16.22,16.22,0,0,1,2.362.206v2.6H13.92A1.525,1.525,0,0,0,12.2,8.572v1.979h2.926l-.468,3.05H12.2v7.373a10.554,10.554,0,0,0,8.9-10.423"
              fill={color}
            />
            <path
              id="Path_27"
              data-name="Path 27"
              d="M48.25,35.847l.468-3.05H45.791V30.818a1.525,1.525,0,0,1,1.72-1.648h1.331v-2.6a16.22,16.22,0,0,0-2.362-.206c-2.41,0-3.986,1.461-3.986,4.105V32.8H39.815v3.05h2.679V43.22a10.667,10.667,0,0,0,3.3,0V35.847Z"
              transform="translate(-33.591 -22.245)"
              fill="white"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
