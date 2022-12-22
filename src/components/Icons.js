import React from "react";
import { classNames, prefixClass } from "../utils";

const DEFAULT_GRAY = "#3E445D";

export const PlusIcon = ({ width, color }) => (
  <svg
    width={width}
    height={(width * 448) / 352}
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
    height={(width * 448) / 352}
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
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke={color || DEFAULT_GRAY}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

export const ArrowDownIcon = ({ width, color }) =>
  ArrowUpIcon({ width, color, rotate: 180 });

export const ArrowUpIcon = ({ width, color, rotate }) => {
  const svgClass = classNames({
    "arrow-icon-down": rotate,
    "arrow-icon-up ": !rotate
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={width || "12.166"}
      className={svgClass}
      height={((width || 13.023) * 12.166) / 13.023}
      stroke={color || DEFAULT_GRAY}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  );
};

export const ChevronIcon = ({ width, color, rotate }) => {
  const svgClass = classNames({
    "chevron-icon-rotate-90": rotate,
    "chevron-icon-rotate-0 ": !rotate
  });

  return (
    <svg
      width={width}
      height={(width * 14.828) / 8.414}
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color || DEFAULT_GRAY}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export const RequiredInfoIcon = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "11.591"}
      height={((width | 10.149) * 11.591) / 10.149}
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
      height={((width | 13) * 16.57) / 13}
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

export const TagLinkSvg = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "10"}
      height={width || "10"}
      viewBox="0 0 10.961 10.951"
    >
      <g
        id="Group_2268"
        data-name="Group 2268"
        transform="translate(-565.026 -707.524)"
      >
        <g
          id="link_4_"
          data-name="link (4)"
          transform="translate(563.631 706.119)"
        >
          <path
            id="Path_36573"
            data-name="Path 36573"
            d="M10,7.369a2.439,2.439,0,0,0,3.678.263l1.463-1.463a2.439,2.439,0,1,0-3.449-3.449l-.839.834"
            transform="translate(-4.1 0)"
            fill="none"
            stroke=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            id="Path_36574"
            data-name="Path 36574"
            d="M7.851,9.973A2.439,2.439,0,0,0,4.173,9.71L2.71,11.173a2.439,2.439,0,1,0,3.449,3.449l.834-.834"
            transform="translate(0 -3.58)"
            fill="none"
            stroke=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </g>
    </svg>
  );
};

export const EyeOffSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16.287"
    height="16.121"
    viewBox="0 0 18.287 18.121"
  >
    <g transform="translate(-219.939 -6.939)">
      <rect width="16" height="16" transform="translate(220 7)" fill="none" />
      <g transform="translate(221 8)">
        <path
          d="M13.663,14.5a7.493,7.493,0,0,1-4.44,1.551C3.99,16.047,1,10.024,1,10.024A13.866,13.866,0,0,1,4.783,5.551m2.871-1.37A6.771,6.771,0,0,1,9.223,4c5.233,0,8.223,6.024,8.223,6.024a13.936,13.936,0,0,1-1.615,2.4m-5.023-.806a2.237,2.237,0,0,1-3.814-.981,2.27,2.27,0,0,1,.644-2.212"
          transform="translate(-0.969 -2.023)"
          fill="none"
          stroke="#6b7e8f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <line
          x2="16"
          y2="16"
          transform="translate(0 0)"
          fill="none"
          stroke="#6b7e8f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </g>
    </g>
  </svg>
);

export const EyeOpenSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16.25"
    height="16"
    viewBox="0 0 18.25 18"
  >
    <g transform="translate(-220 -7)">
      <rect width="16" height="16" transform="translate(220 7)" fill="none" />
      <g transform="translate(220 6)">
        <path
          d="M1,10S4,4,9.25,4s8.25,6,8.25,6-3,6-8.25,6S1,10,1,10Z"
          fill="none"
          stroke="#6b7e8f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <circle
          cx="3"
          cy="3"
          r="3"
          transform="translate(6.25 7)"
          fill="none"
          stroke="#6b7e8f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </g>
    </g>
  </svg>
);
