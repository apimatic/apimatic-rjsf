import React from "react";
import { prefixClass as pfx } from "../utils";

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <div className={pfx("panel panel-danger errors")}>
      <div className={pfx("panel-heading")}>
        <h3 className={pfx("panel-title")}>Errors</h3>
      </div>
      <ul className={pfx("list-group")}>
        {errors.map((error, i) => {
          return (
            <li key={i} className={pfx("list-group-item text-danger")}>
              {error.stack}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
