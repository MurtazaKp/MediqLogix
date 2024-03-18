import React, { type FC } from "react";
import type { SquaredIconProps } from "./types";

export const LinkedinIcon: FC<SquaredIconProps> = ({
  size = 24,
  className = "",
  color,
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
      <clipPath id="clip-Linkdine">
        <rect width="24" height="23" />
      </clipPath>
    </defs>
    <g id="Linkdine" clip-path="url(#clip-Linkdine)">
      <g
        id="Group_1015"
        data-name="Group 1015"
        transform="translate(-2023.862 -6871.5)"
        fill="#ffffff"
      >
        <path
          id="Path_191"
          data-name="Path 191"
          d="M21.1,10.552A10.552,10.552,0,1,1,10.552,0,10.552,10.552,0,0,1,21.1,10.552"
          transform="translate(2025.311 6872.448)"
          fill={color}
        />
        <path
          id="Path_188"
          data-name="Path 188"
          d="M59.317,51.114c.173-.195.316-.392.494-.56a2.711,2.711,0,0,1,1.95-.77,4.515,4.515,0,0,1,1.226.149,2.4,2.4,0,0,1,1.7,1.79,7.5,7.5,0,0,1,.227,2.051c0,1.458,0,2.915,0,4.373,0,.136-.038.172-.172.171q-1.126-.009-2.253,0c-.132,0-.161-.04-.16-.165q.006-2.08,0-4.161a3.737,3.737,0,0,0-.121-1.033,1.161,1.161,0,0,0-1.277-.905,1.4,1.4,0,0,0-1.467,1.393,5.2,5.2,0,0,0-.04.651c0,1.349,0,2.7,0,4.046,0,.135-.033.174-.171.173q-1.135-.01-2.269,0c-.121,0-.156-.032-.156-.154q0-4.006,0-8.011c0-.132.043-.163.168-.162q1.077.008,2.155,0c.132,0,.166.042.164.167-.007.319,0,.638,0,.958"
          transform="translate(1977.361 6830.446)"
        />
        <path
          id="Path_189"
          data-name="Path 189"
          d="M32.408,55.273c0,1.321,0,2.642,0,3.963,0,.147-.036.191-.188.189-.75-.008-1.5-.006-2.252,0-.12,0-.156-.029-.156-.154q.005-4.012,0-8.025c0-.111.027-.15.144-.149.762.005,1.523.006,2.285,0,.146,0,.166.055.166.181q-.006,2,0,4"
          transform="translate(2000.156 6829.34)"
        />
        <path
          id="Path_190"
          data-name="Path 190"
          d="M31.543,26.093a1.5,1.5,0,1,1-1.5-1.492,1.5,1.5,0,0,1,1.5,1.492"
          transform="translate(2001.229 6851.693)"
        />
      </g>
    </g>
  </svg>
);
