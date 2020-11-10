import React from "react";
import { prefixClass } from "../utils";

const DEFAULT_GRAY = "#3E445D";

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
      fill={color || DEFAULT_GRAY}
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
      fill={color || DEFAULT_GRAY}
      d="M324.5 330.5c0 6.25-2.5 12.5-7 17l-34 34c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-73.5-73.5-73.5 73.5c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-34-34c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l73.5-73.5-73.5-73.5c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l34-34c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l73.5 73.5 73.5-73.5c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l34 34c4.5 4.5 7 10.75 7 17s-2.5 12.5-7 17l-73.5 73.5 73.5 73.5c4.5 4.5 7 10.75 7 17z"
    />
  </svg>
);

export const DeleteIcon = ({ width, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "13.267"}
    height={(width || 13) * 13.267 / 13}
    viewBox="0 0 13.267 13"
  >
    <g transform="translate(0.5 0.5)">
      <path
        d="M3,6H15.267"
        transform="translate(-3 -3.6)"
        fill="none"
        stroke={color || DEFAULT_GRAY}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        d="M13.267,4.4v8.4A1.191,1.191,0,0,1,12.086,14h-5.9A1.191,1.191,0,0,1,5,12.8V4.4m1.771,0V3.2A1.191,1.191,0,0,1,7.952,2h2.362A1.191,1.191,0,0,1,11.5,3.2V4.4"
        transform="translate(-3 -2)"
        fill="none"
        stroke={color || DEFAULT_GRAY}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <line
        y2="4.857"
        transform="translate(4.77 5)"
        fill="none"
        stroke={color || DEFAULT_GRAY}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <line
        x1="0.004"
        y2="4.857"
        transform="translate(7.496 5)"
        fill="none"
        stroke={color || DEFAULT_GRAY}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
    </g>
  </svg>
);

export const ArrowDownIcon = ({ width, color }) =>
  ArrowUpIcon({ width, color, rotate: 180 });

export const ArrowUpIcon = ({ width, color, rotate }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "12.166"}
    transform={`rotate(${rotate ? rotate : 0})`}
    height={(width || 13.023) * 12.166 / 13.023}
    viewBox="0 0 12.166 13.023"
  >
    <g transform="translate(17.82 16.795) rotate(180)">
      <line
        y2="10.712"
        transform="translate(11.737 4.522)"
        fill="none"
        stroke={color || DEFAULT_GRAY}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        d="M15.045,12l-5.023,4.811L5,12"
        transform="translate(1.714 -0.766)"
        fill="none"
        stroke={color || DEFAULT_GRAY}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
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
      stroke={color || DEFAULT_GRAY}
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
          stroke={color || DEFAULT_GRAY}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <line
          y2="2.022"
          transform="translate(6.832 5.982)"
          fill="none"
          stroke={color || DEFAULT_GRAY}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <line
          x2="0.005"
          transform="translate(6.832 10.025)"
          fill="none"
          stroke={color || DEFAULT_GRAY}
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
      width={width || "16.57"}
      height={(width | 13) * 16.57 / 13}
      viewBox="0 0 16.57 13"
    >
      <g transform="translate(-374 -272.36)">
        <path
          d="M17.59,16.55v-2.6a.635.635,0,0,1,.618-.65.651.651,0,0,0,0-1.3,1.906,1.906,0,0,0-1.854,1.95v2.6a1.27,1.27,0,0,1-1.236,1.3.651.651,0,0,0,0,1.3,1.27,1.27,0,0,1,1.236,1.3v2.6A1.906,1.906,0,0,0,18.208,25a.651.651,0,0,0,0-1.3.635.635,0,0,1-.618-.65v-2.6a2.641,2.641,0,0,0-.854-1.95A2.641,2.641,0,0,0,17.59,16.55Z"
          transform="translate(359.5 260.36)"
          fill={color || "#3E445D"}
        />
        <path
          d="M3.09,4.55V1.95a.635.635,0,0,1,.618-.65A.635.635,0,0,0,4.326.65.635.635,0,0,0,3.708,0,1.906,1.906,0,0,0,1.854,1.95v2.6A1.27,1.27,0,0,1,.618,5.85a.651.651,0,0,0,0,1.3,1.27,1.27,0,0,1,1.236,1.3v2.6A1.906,1.906,0,0,0,3.708,13a.651.651,0,0,0,0-1.3.635.635,0,0,1-.618-.65V8.45A2.641,2.641,0,0,0,2.236,6.5,2.641,2.641,0,0,0,3.09,4.55Z"
          transform="translate(390.57 285.36) rotate(180)"
          fill={color || "#3E445D"}
        />
        <g transform="translate(381.315 276.15)">
          <rect
            width="1.052"
            height="2.855"
            rx="0.526"
            transform="translate(0.451 3.906)"
            fill={color || "#3E445D"}
          />
          <circle
            cx="0.901"
            cy="0.901"
            r="0.901"
            transform="translate(0)"
            fill={color || "#3E445D"}
          />
        </g>
      </g>
    </svg>
  );
};
