import { CITIES } from "./Map.lyon";
import { useState } from "react";

const Map = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <svg
      width="1423"
      height="1897"
      preserveAspectRatio="xMidYMax"
      viewBox="-276 50542 1423 1897"
    >
      <g className="city-paths" transform="translate(355.72521,474.95327)">
        <g transform="matrix(2,0,0,2,-618.74882,-51603.846)">
          {CITIES.map((c) => {
            const { codeInsee, svgPath } = c;
            return (
              <path
                key={codeInsee}
                className="fill-indigo-50 stroke-indigo-600 stroke-1 hover:fill-indigo-100"
                d={svgPath.d}
                id={codeInsee.toString()}
                onMouseEnter={() => setHovered(codeInsee)}
                onMouseLeave={() => setHovered(null)}
                transform={svgPath.transform}
              />
            );
          })}
        </g>
      </g>
      <g className="city-labels" transform="translate(-20,0)">
        {CITIES.map((c) => {
          const { codeInsee, svgLabel } = c;
          return (
            <text
              key={codeInsee}
              id={codeInsee.toString()}
              x={svgLabel.x}
              y={svgLabel.y}
              className={
                hovered === codeInsee
                  ? "pointer-events-none fill-indigo-600 text-xs"
                  : "pointer-events-none hidden fill-indigo-400 text-xs"
              }
            >
              {svgLabel.titles.map((t, i) => (
                <tspan key={i} x={t.x} y={t.y}>
                  {t.title}
                </tspan>
              ))}
            </text>
          );
        })}
      </g>
    </svg>
  );
};
export default Map;
