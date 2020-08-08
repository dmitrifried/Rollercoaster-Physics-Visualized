import React from 'react';

export default function CoasterSVG(props) {
  const g = 9.8;

  function maxHeight() {
    if (props.height < 2 * props.loop) {
      return 0;
    }
    // v^2 / r == g
    // v^2 = rg
    // mv^2 / 2 + mgh = E
    // h = (E - mv^2 / 2) / mg

    let v2 = props.loop * g;
    let h = (g * props.height - v2 / 2) / g;
    return h;
  }

  let maxH = maxHeight();

  return (
    <svg width="800" height="450">
      {/* frame */}
      <path d="M 0 0 H 800 V 450 H 0 Z" fill="transparent" stroke="black" />

      {/* car */}
      <rect
        x="3"
        y={400 - props.height - 13}
        width="18"
        height="12"
        fill="grey"
      />

      {/* track */}
      <path
        d={
          "M 0 " +
          (400 - props.height) +
          " H 40 " +
          " C 100 " +
          (400 - props.height) +
          ", 130 " +
          (400 - props.height / 1.6) +
          ", 150 " +
          (400 - props.height / 2) +
          " S 200 400, 350 400 H 790"
        }
        stroke="black"
        fill="none"
      />

      {/* loop */}
      <circle
        cx="550"
        cy={400 - props.loop}
        r={props.loop}
        fill="none"
        stroke="black"
      />

      {/* ramp adornments */}
      <text x="100" y={400 - props.height - 10}>
        E = mgh
        <tspan fontSize="10" baselineShift="sub">
          ramp
        </tspan>{" "}
        + mv
        <tspan fontSize="10" baselineShift="super">
          2
        </tspan>
        /2 = {Math.round(g * props.mass * props.height * 5) / 10} + 0
      </text>
      <text x="15" y={400 - props.height - 20} fontSize="11">
        m = {props.mass}
      </text>
      <text x="10" y={400 - props.height + 20} fontSize="11">
        h = {props.height}
      </text>

      {/* loop adornments */}
      <text x="420" y={400 - 2 * props.loop - 10}>
        v
        <tspan fontSize="10" baselineShift="super">
          2
        </tspan>{" "}
        = 2E/m - 2gh
        <tspan fontSize="10" baselineShift="subscript">
          loop
        </tspan>{" "}
        = {Math.round(g * props.height * 20) / 10} -{" "}
        {Math.round(g * 2 * props.loop * 20) / 10} ={" "}
        {Math.round(g * (props.height - 2 * props.loop) * 20) / 10}
      </text>

      <text x="525" y={400 - 2 * props.loop + 20}>
        <tspan fill={maxH >= 2 * props.loop ? "green" : "red"}>
          v
          <tspan fontSize="10" baselineShift="super">
            2
          </tspan>
          /r {maxH >= 2 * props.loop ? ">" : "<"} g
        </tspan>
      </text>

      <text x="535" y={400 - props.loop} fontSize="11">
        r = {props.loop}
      </text>

      <text x="525" y="430">
        <tspan fill={maxH >= 2 * props.loop ? "green" : "red"} fontSize="30">
          {maxH >= 2 * props.loop ? "YES" : "NO"}
        </tspan>
      </text>
    </svg>
  );
}
