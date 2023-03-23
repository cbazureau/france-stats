import { useState } from "react";
import {
  type EnrichedStatType,
  type CityType,
  type StatTypeType,
} from "../data/commun.types";

import Path from "./Path";
import Label from "./Label";
import Panel from "./Panel";

const riverStyle = {
  fill: "none",
  fillOpacity: 1,
  stroke: "#7fcbec",
  strokeWidth: 6,
  strokeMiterlimit: 4,
  strokeOpacity: 1,
};

// Map

type MapProps = {
  cities: CityType[];
  districts: CityType[];
  stats: EnrichedStatType[];
  currentStat?: StatTypeType;
};

const Map = ({ cities, districts, stats, currentStat }: MapProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <>
      {hovered && (
        <Panel
          city={[...cities, ...districts].find((c) => c.codeInsee === hovered)}
          stats={stats}
          currentStat={currentStat}
        />
      )}
      <div
        style={{
          width: "100%",
          aspectRatio: "1423/1897",
          height: "auto",
          position: "relative",
        }}
      >
        <svg
          style={{ width: "100%", height: "100%" }}
          preserveAspectRatio="xMidYMax"
          viewBox="-276 50542 1423 1897"
        >
          <g className="city-paths" transform="translate(355,475)">
            <g transform="matrix(2,0,0,2,-618.74882,-51603.846)">
              {cities.map((city) => (
                <Path
                  key={city.codeInsee}
                  city={city}
                  setHovered={setHovered}
                  stats={stats}
                  currentStat={currentStat}
                />
              ))}
            </g>
          </g>
          <g className="city-labels" transform="translate(-20,0)">
            {cities.map((city) => (
              <Label
                key={city.codeInsee}
                city={city}
                hovered={hovered}
                currentStat={currentStat}
              />
            ))}
          </g>
        </svg>
        <div
          style={{
            width: "25%",
            aspectRatio: "310/350",
            height: "auto",
            position: "absolute",
            top: "10%",
            right: "10%",
          }}
        >
          <svg
            style={{ width: "100%", height: "100%" }}
            preserveAspectRatio="xMidYMax"
            viewBox="0 0 310 350"
          >
            <g id="districts" transform="translate(-217.21023,-248.11122)">
              {districts.map((city) => (
                <Path
                  key={city.codeInsee}
                  city={city}
                  setHovered={setHovered}
                  stats={stats}
                  currentStat={currentStat}
                />
              ))}
            </g>
            <g id="river" transform="translate(-217.21023,-248.11122)">
              <path
                style={riverStyle}
                d="M 385.7007,590.49748 C 378.35617,591.92033 371.27308,588.94118 364.36763,586.83309 C 359.53119,584.33404 353.49658,583.22008 351.40743,577.54513 C 343.49785,566.62054 339.79901,553.39894 336.78832,540.41719 C 334.67648,533.48226 336.23691,525.27072 330.61633,519.81785 C 326.60187,513.41951 320.4116,507.98094 319.97031,500.00647 C 318.73967,488.96207 318.80679,477.17523 324.19822,467.1367 C 326.63109,461.73386 330.83719,457.01104 335.17043,453.0742 C 338.63852,450.64467 342.59526,448.49598 342.78094,443.75556 C 345.31991,435.35523 347.28464,426.28176 354.30308,420.33306 C 360.19393,415.57865 358.09188,407.07871 358.5237,400.42015 C 356.84327,396.09538 354.78888,390.09104 348.98933,391.14992 C 340.1433,390.03234 330.63598,394.85275 322.30195,390.84053 C 316.18656,385.56443 317.24314,375.6703 310.24514,371.20067 C 304.8204,363.31108 308.13239,352.80438 312.48612,345.12473 C 319.3528,330.96843 329.5336,318.71377 340.0396,307.1652 C 347.51757,300.81853 355.5883,294.95676 364.93899,291.8194 C 372.59659,287.47043 379.47891,279.8771 379.87706,270.68229"
                id="path6328"
              />
              <path
                style={riverStyle}
                d="M 423.87795,322.77156 C 417.83846,323.7115 411.57335,324.01654 406.63984,328.06875 C 400.0935,331.80582 396.41222,339.00418 391.09945,344.23152 C 387.03906,348.80404 382.53505,353.16136 381.56929,359.49323 C 378.95822,376.73969 380.42357,394.33326 380.38816,411.73474 C 382.16188,425.46205 373.39764,436.97492 367.36821,448.45647 C 361.50183,458.92413 356.52974,469.95827 350.33116,480.18856 C 344.63912,486.69282 341.82507,495.11118 338.3265,502.87277 C 335.47697,512.94595 333.01249,523.61729 335.59609,534.01012 C 337.88982,547.08389 341.42996,560.14095 347.70491,571.87804 C 351.26813,576.57701 353.17786,583.18744 359.57497,584.61041 C 366.01841,587.87957 373.2366,589.91153 380.30708,590.88273 C 382.10495,590.75431 383.90283,590.62589 385.7007,590.49748"
                id="river"
              />
            </g>
            <g
              id="districts-labels"
              transform="translate(-217.21023,-248.11122)"
            >
              {districts.map((city) => (
                <Label
                  key={city.codeInsee}
                  city={city}
                  hovered={hovered}
                  currentStat={currentStat}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};
export default Map;
