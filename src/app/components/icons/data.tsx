import React, { type FC } from "react";
import type { SquaredIconProps } from "./types";

export const DataIcon: FC<SquaredIconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="58"
    height="58"
    viewBox="0 0 58 58"
  >
    <defs>
      <clipPath id="clip-Data_Analytics">
        <rect width="58" height="58" />
      </clipPath>
    </defs>
    <g
      id="Data_Analytics"
      data-name="Data Analytics"
      clipPath="url(#clip-Data_Analytics)"
    >
      <g id="Group_42" data-name="Group 42" transform="translate(-214 -1729)">
        <path
          id="Path_35"
          data-name="Path 35"
          d="M49.522,32.3A22.261,22.261,0,1,1,27.261,10.042a.771.771,0,0,1,.774.774V31.529H48.747a.771.771,0,0,1,.774.774Zm-21.941.774L13.173,47.487A20.714,20.714,0,0,0,47.96,33.077Zm-15.5,13.314L25.392,33.078H6.564A20.641,20.641,0,0,0,12.078,46.392ZM6.564,31.529H26.487V11.6A20.714,20.714,0,0,0,6.564,31.529ZM32.3,5a.774.774,0,0,0-.774.774V27.261a.771.771,0,0,0,.774.774H53.79a.771.771,0,0,0,.774-.774A22.262,22.262,0,0,0,32.3,5Zm.774,1.564V26.487H53A20.71,20.71,0,0,0,33.078,6.564Z"
          transform="translate(213 1728)"
          fillRule="evenodd"
        />
      </g>
    </g>
  </svg>
);
