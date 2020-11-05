import React from "react";
import { prefixClass } from "../utils";

export const PlusIcon = ({ width, color }) => (
  <svg
    width={width}
    height={width * 448 / 352}
    className={prefixClass("icon icon-plus")}
    viewBox="0 0 352 448"
  >
    <title />
    <g id="icomoon-ignore" />
    <path
      fill={color || "#000"}
      d="M352 184v48c0 13.25-10.75 24-24 24h-104v104c0 13.25-10.75 24-24 24h-48c-13.25 0-24-10.75-24-24v-104h-104c-13.25 0-24-10.75-24-24v-48c0-13.25 10.75-24 24-24h104v-104c0-13.25 10.75-24 24-24h48c13.25 0 24 10.75 24 24v104h104c13.25 0 24 10.75 24 24z"
    />
  </svg>
);

export const CloseIcon = ({ width, color }) => (
  <svg
    width={width}
    height={width * 448 / 352}
    className={prefixClass("icon icon-remove")}
    viewBox="0 0 352 448"
  >
    <title />
    <g id="icomoon-ignore" />
    <path
      fill={color || "#000"}
      d="M324.5 330.5c0 6.25-2.5 12.5-7 17l-34 34c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-73.5-73.5-73.5 73.5c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-34-34c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l73.5-73.5-73.5-73.5c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l34-34c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l73.5 73.5 73.5-73.5c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l34 34c4.5 4.5 7 10.75 7 17s-2.5 12.5-7 17l-73.5 73.5 73.5 73.5c4.5 4.5 7 10.75 7 17z"
    />
  </svg>
);

export const DeleteIcon = ({ width, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "17.756"}
    height={(width || 20.5) * 17.756 / 20.5}
    viewBox="0 0 17.756 20.5"
  >
    <g transform="translate(0.75 0.75)">
      <path
        d="M3,6H19.256"
        transform="translate(-3 -2.2)"
        fill="none"
        stroke={color || "#3e445d"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17.256,5.8V19.1A1.83,1.83,0,0,1,15.5,21H6.751A1.83,1.83,0,0,1,5,19.1V5.8m2.626,0V3.9A1.83,1.83,0,0,1,9.377,2h3.5a1.83,1.83,0,0,1,1.751,1.9V5.8"
        transform="translate(-3 -2)"
        fill="none"
        stroke={color || "#3e445d"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        y2="6"
        transform="translate(6.322 8.357)"
        fill="none"
        stroke={color || "#3e445d"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        y2="6"
        transform="translate(9.934 8.357)"
        fill="none"
        stroke={color || "#3e445d"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export const ArrowDownIcon = ({ width, color }) =>
  ArrowUpIcon({ width, color, rotate: 180 });

export const ArrowUpIcon = ({ width, color, rotate }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 16.121}
    height={(width || 15.5) * 16.121 / 15.5}
    transform={`rotate(${rotate ? rotate : 0})`}
    viewBox="0 0 16.121 15.5"
  >
    <g transform="translate(-3.939 -4.25)">
      <line
        y1="14"
        transform="translate(12 5)"
        fill="none"
        stroke={color || "#3e445d"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M5,12l7-7,7,7"
        fill="none"
        stroke={color || "#3e445d"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export const CheveronIcon = ({ width, color, rotate }) => (
  <svg
    width={width}
    height={width * 14.828 / 8.414}
    className={prefixClass("icon icon-cheveron")}
    transform={`rotate(${rotate ? rotate : 0})`}
    viewBox="0 0 14.828 8.414"
  >
    <title />
    <g id="icomoon-ignore" />
    <path
      fill="none"
      stroke={color || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
      d="M9,18l6-6L9,6"
      transform="translate(-4.586 16) rotate(-90)"
    />
  </svg>
);

export const RequiredInfoIcon = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "11.591"}
      height={(width | 10.149) * 11.591 / 10.149}
      viewBox="0 0 11.591 10.149"
    >
      <g transform="translate(-1.038 -2.397)">
        <path
          d="M5.968,3.384,1.687,10.53a1.011,1.011,0,0,0,.864,1.516h8.562a1.011,1.011,0,0,0,.864-1.516L7.7,3.384a1.011,1.011,0,0,0-1.728,0Z"
          fill="none"
          stroke={color || "#f23a25"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <line
          y2="2.022"
          transform="translate(6.832 5.982)"
          fill="none"
          stroke={color || "#f23a25"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <line
          x2="0.005"
          transform="translate(6.832 10.025)"
          fill="none"
          stroke={color || "#f23a25"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
};

export const JsonIcon = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20.805"}
      height={(width || 20) * (20.805 / 20)}
      viewBox="0 0 20.805 20"
    >
      <path
        d="M14.654,9.264v-3.2H11.293a1.763,1.763,0,0,1-1.077-.424,1.525,1.525,0,0,1-.375-1V1.231H1.3a.1.1,0,0,0-.067.03.073.073,0,0,0-.03.068V18.653a.112.112,0,0,0,.03.068.082.082,0,0,0,.067.03h13.26c.03,0,.028-.015.043-.03s.054-.045.054-.068V9.264Zm1.226,9.778a.947.947,0,0,1-.945.945H.915a.947.947,0,0,1-.945-.945V.94A.935.935,0,0,1,.247.272.947.947,0,0,1,.915-.005h9.553a.207.207,0,0,1,.067-.008A.438.438,0,0,1,10.82.1h.015a.132.132,0,0,1,.037.03l4.88,4.942a.46.46,0,0,1,.142.323.507.507,0,0,1-.015.105Zm-4.925-17.6L14.44,4.974Z"
        transform="translate(4.911 0.013)"
        fill={color || "#3e445d"}
        fillRule="evenodd"
      />
      <rect
        width="17.845"
        height="8.65"
        rx="2"
        transform="translate(0 8.497)"
        fill={color || "#3e445d"}
      />
      <text
        transform="translate(2 9.657)"
        fill="#fff"
        fontSize="5"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        <tspan x="0" y="5">
          JSON
        </tspan>
      </text>
    </svg>
  );
};
