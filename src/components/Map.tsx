import { COMMUNES, COMMUNES_LABEL } from "./MapData";

const Map = () => (
  <svg
    width="1423"
    height="1897"
    preserveAspectRatio="xMidYMax"
    viewBox="-276.50058 50542.547 1423 1897"
  >
    <g className="communes" transform="translate(355.72521,474.95327)">
      <g
        id="bg-all-except-lyon"
        transform="matrix(2,0,0,2,-618.74882,-51603.846)"
      >
        {COMMUNES.filter((c) => c.type === "all-except-lyon").map((c) => (
          <path
            key={c.id}
            className="fill-slate-100 stroke-cyan-500 stroke-1 hover:fill-slate-200"
            d={c.d}
            id={c.id}
            transform={c.transform}
          />
        ))}
      </g>
      <g id="bg-lyon-district" transform="matrix(4,0,0,3.940,-300,-151000)">
        {COMMUNES.filter((c) => c.type === "all-lyon-district").map((c) => (
          <path
            key={c.id}
            className="fill-slate-100 stroke-cyan-500 stroke-1 hover:fill-slate-200"
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
          <text key={id} id={id} x={x} y={y} className="text-xs">
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
