import { COMMUNES, COMMUNES_LABEL } from "./MapData";

const Map = () => (
  <svg
    width="1423"
    height="1897"
    preserveAspectRatio="xMidYMax"
    viewBox="-276.50058 50542.547 1423 1897"
  >
    <g className="communes" transform="translate(355.72521,474.95327)">
      <g transform="matrix(2,0,0,2,-618.74882,-51603.846)">
        {COMMUNES.map((c) => (
          <path
            key={c.id}
            className="fill-indigo-50 stroke-indigo-600 stroke-1 hover:fill-indigo-100"
            d={c.d}
            id={c.id}
            transform={c.transform}
          />
        ))}
      </g>
    </g>
    <g className="communes-labels" transform="translate(-20,0)">
      {COMMUNES_LABEL.map((c) => {
        const { id, x, y, titles } = c;
        return (
          <text
            key={id}
            id={id}
            x={x}
            y={y}
            className="fill-indigo-600 text-xs"
          >
            {titles.map((t, i) => (
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
export default Map;
