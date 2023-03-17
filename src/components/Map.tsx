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
      <g
        id="bg-lyon-district"
        transform="matrix(4,0,0,4,-776.93457,-153636.91)"
      >
        {COMMUNES.filter((c) => c.type === "all-lyon-district").map((c) => (
          <path
            key={c.id}
            className="hidden fill-slate-100 stroke-cyan-500 stroke-1 hover:fill-slate-200"
            d={c.d}
            id={c.id}
            transform={c.transform}
          />
        ))}
      </g>
      <g id="bg-lyon" transform="matrix(4,0,0,4,-776.93457,-153636.91)">
        {COMMUNES.filter((c) => c.type === "lyon").map((c) => (
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
      <text id="text4397" y="50756.98" x="115.77654" className="text-xs">
        <tspan y="50756.98" x="115.77654" id="tspan4401">
          Quincieux
        </tspan>
      </text>
      <text className="text-xs" x="36.655327" y="51044.371" id="text3744">
        <tspan x="36.655327" y="51044.371" id="tspan3746">
          Lissieu
        </tspan>
      </text>
      <text id="text3872" y="51319.809" x="-87.84864" className="text-xs">
        <tspan y="51319.809" x="-87.84864" id="tspan3874">
          Marcy-
        </tspan>
        <tspan y="51339.809" x="-87.84864" id="tspan3876">
          l&apos;Étoile
        </tspan>
      </text>
      <text id="text3878" y="51430.121" x="-34.108528" className="text-xs">
        <tspan y="51430.121" x="-34.108528" id="tspan3880">
          Saint-Genis-
        </tspan>
        <tspan y="51450.121" x="-34.108528" id="tspan3888">
          les-Ollières
        </tspan>
      </text>
      <text id="text3896" y="51501.535" x="-24.209116" className="text-xs">
        <tspan y="51501.535" x="-24.209116" id="tspan3898">
          Craponne
        </tspan>
      </text>
      <text className="text-xs" x="62.765068" y="51546.793" id="text3900">
        <tspan id="tspan3902" x="62.765068" y="51546.793">
          Francheville
        </tspan>
      </text>
      <text id="text3904" y="51438.605" x="79.73558" className="text-xs">
        <tspan y="51438.605" x="79.73558" id="tspan3906">
          Tassin-la-
        </tspan>
        <tspan y="51458.605" x="79.73558" id="tspan3908">
          Demi-Lune
        </tspan>
      </text>
      <text className="text-xs" x="23.167105" y="51353.746" id="text3910">
        <tspan id="tspan3912" x="23.167105" y="51353.746">
          Charbonnières-
        </tspan>
        <tspan x="23.167105" y="51373.746" id="tspan3916">
          les-Bains
        </tspan>
        <tspan x="23.167105" y="51393.746" id="tspan3914" />
      </text>
      <text id="text3918" y="51204.887" x="-76.128181" className="text-xs">
        <tspan id="tspan3920" y="51204.887" x="-76.128181">
          La Tour-de-
        </tspan>
        <tspan y="51224.887" x="-76.128181" id="tspan3922">
          Salvagny
        </tspan>
      </text>
      <text id="text3924" y="51215.488" x="42.312191" className="text-xs">
        <tspan id="tspan3926" y="51215.488" x="42.312191">
          Dardilly
        </tspan>
      </text>
      <text className="text-xs" x="108.7802" y="51112.254" id="text3928">
        <tspan x="108.7802" y="51112.254" id="tspan3930">
          Limonest
        </tspan>
      </text>
      <text id="text3932" y="51004.77" x="177.36949" className="text-xs">
        <tspan id="tspan3934" y="51004.77" x="177.36949">
          Poleymieux-
        </tspan>
        <tspan y="51024.77" x="177.36949" id="tspan3936">
          au-Mont-d&apos;Or
        </tspan>
      </text>
      <text className="text-xs" x="207.06804" y="50873.254" id="text3942">
        <tspan x="207.06804" y="50873.254" id="tspan3944">
          Saint-
        </tspan>
        <tspan x="207.06804" y="50893.254" id="tspan3948">
          Germain-
        </tspan>
        <tspan id="tspan3946" x="207.06804" y="50913.254">
          au-Mont-d&apos;Or
        </tspan>
      </text>
      <text id="text3950" y="50830.113" x="308.18433" className="text-xs">
        <tspan id="tspan3952" y="50830.113" x="308.18433">
          Genay
        </tspan>
      </text>
      <text className="text-xs" x="254.44415" y="50934.059" id="text3954">
        <tspan x="254.44415" y="50934.059" id="tspan3956">
          Curis-au-
        </tspan>
        <tspan id="tspan3958" x="254.44415" y="50954.059">
          Mont-
        </tspan>
        <tspan x="254.44415" y="50974.059" id="tspan4085">
          d&apos;Or
        </tspan>
      </text>
      <text id="text3960" y="50992.754" x="288.38525" className="text-xs">
        <tspan y="50992.754" x="288.38525" id="tspan3964">
          Albigny-
        </tspan>
        <tspan y="51012.754" x="288.38525" id="tspan3968">
          sur-Saône
        </tspan>
      </text>
      <text className="text-xs" x="315.96252" y="50881.027" id="text3970">
        <tspan x="315.96252" y="50881.027" id="tspan3972">
          Neuville-
        </tspan>
        <tspan x="315.96252" y="50901.027" id="tspan3974">
          sur-Saône
        </tspan>
      </text>
      <text className="text-xs" x="406.47217" y="50931.941" id="text3976">
        <tspan x="406.47217" y="50931.941" id="tspan3978">
          Montanay
        </tspan>
      </text>
      <text id="text3980" y="50979.316" x="470.81897" className="text-xs">
        <tspan id="tspan3982" y="50979.316" x="470.81897">
          Cailloux-
        </tspan>
        <tspan y="50999.316" x="470.81897" id="tspan3984">
          sur-
        </tspan>
        <tspan y="51019.316" x="470.81897" id="tspan3986">
          Fontaines
        </tspan>
      </text>
      <text id="text3988" y="50979.316" x="372.53107" className="text-xs">
        <tspan id="tspan3990" y="50979.316" x="372.53107">
          Fleurieu-
        </tspan>
        <tspan y="50999.316" x="372.53107" id="tspan3992">
          sur-Saône
        </tspan>
      </text>
      <text id="text3998" y="51045.785" x="256.56543" className="text-xs">
        <tspan id="tspan4000" y="51045.785" x="256.56543">
          Couzon-au-
        </tspan>
        <tspan y="51065.785" x="256.56543" id="tspan4002">
          Mont-d&apos;Or
        </tspan>
      </text>
      <text className="text-xs" x="262.92944" y="51100.23" id="text4004">
        <tspan x="262.92944" y="51100.23" id="tspan4006">
          Saint-Romain-
        </tspan>
        <tspan id="tspan4008" x="262.92944" y="51120.23">
          au-Mont-d&apos;Or
        </tspan>
      </text>

      <text id="text4024" y="51048.613" x="368.28845" className="text-xs">
        <tspan id="tspan4026" y="51048.613" x="368.28845">
          Fontaines-
        </tspan>
        <tspan y="51068.613" x="368.28845" id="tspan4028">
          Saint-
        </tspan>
        <tspan y="51088.613" x="368.28845" id="tspan4030">
          Martin
        </tspan>
      </text>
      <text id="text4032" y="51079.781" x="319.30719" className="text-xs">
        <tspan id="tspan4034" y="51075.781" x="319.30719">
          Rochetaillée
        </tspan>
        <tspan id="tspan4034" y="51095.781" x="319.30719">
          sur-Saône
        </tspan>
      </text>
      <text className="text-xs" x="479.30426" y="51071.238" id="text4036">
        <tspan id="tspan4042" x="479.30426" y="51071.238">
          Sathonay-
        </tspan>
        <tspan x="479.30426" y="51091.238" id="tspan4049">
          Village
        </tspan>
      </text>
      <text id="text4051" y="51192.152" x="502.63873" className="text-xs">
        <tspan id="tspan4053" y="51192.152" x="502.63873">
          Rillieux-
        </tspan>
        <tspan y="51212.152" x="502.63873" id="tspan4055">
          la-Pape
        </tspan>
      </text>
      <text className="text-xs" x="372.53101" y="51267.816" id="text4057">
        <tspan x="372.53101" y="51267.816" id="tspan4059">
          Caluire-
        </tspan>
        <tspan x="372.53101" y="51287.816" id="tspan4121">
          et-Cuire
        </tspan>
      </text>
      <text id="text4061" y="51162.457" x="434.04938" className="text-xs">
        <tspan y="51162.457" x="434.04938" id="tspan4063">
          Sathonay-
        </tspan>
        <tspan id="tspan4065" y="51182.457" x="434.04938">
          Camp
        </tspan>
      </text>
      <text className="text-xs" x="377.48083" y="51121.441" id="text4067">
        <tspan x="377.48083" y="51121.441" id="tspan4069">
          Fontaines-
        </tspan>
        <tspan id="tspan4071" x="377.48083" y="51141.441">
          sur-Saône
        </tspan>
      </text>
      <text className="text-xs" x="335.05426" y="51157.504" id="text4073">
        <tspan x="335.05426" y="51157.504" id="tspan4075">
          Collonges-
        </tspan>
        <tspan id="tspan4077" x="335.05426" y="51177.504">
          au-Mont-
        </tspan>
        <tspan x="335.05426" y="51197.504" id="tspan4083">
          d&apos;Or
        </tspan>
      </text>
      <text id="text4087" y="51172.355" x="265.05066" className="text-xs">
        <tspan id="tspan4089" y="51172.355" x="265.05066">
          Saint-
        </tspan>
        <tspan y="51192.355" x="265.05066" id="tspan4095">
          Cyr-
        </tspan>
        <tspan y="51212.355" x="265.05066" id="tspan4091">
          au-Mont-
        </tspan>
        <tspan id="tspan4093" y="51232.355" x="265.05066">
          d&apos;Or
        </tspan>
      </text>
      <text className="text-xs" x="190.80449" y="51146.902" id="text4097">
        <tspan x="190.80449" y="51146.902" id="tspan4099">
          Saint-
        </tspan>
        <tspan id="tspan4101" x="190.80449" y="51166.902">
          Didier-
        </tspan>
        <tspan id="tspan4103" x="190.80449" y="51186.902">
          au-Mont-
        </tspan>
        <tspan x="190.80449" y="51206.902" id="tspan4105">
          d&apos;Or
        </tspan>
      </text>
      <text id="text4107" y="51263.574" x="156.1563" className="text-xs">
        <tspan id="tspan4109" y="51263.574" x="156.1563">
          Champagne-
        </tspan>
        <tspan y="51283.574" x="156.1563" id="tspan4111">
          au-Mont-d&apos;Or
        </tspan>
      </text>
      <text className="text-xs" x="122.92235" y="51376.707" id="text4113">
        <tspan x="122.92235" y="51376.707" id="tspan4115">
          Écully
        </tspan>
      </text>
      <text id="text4117" y="51446.004" x="306.06299" className="text-xs">
        <tspan id="tspan4119" y="51446.004" x="306.06299">
          Lyon
        </tspan>
      </text>
      <text className="text-xs" x="453.31281" y="51383.488" id="text4209">
        <tspan x="453.31281" y="51383.488" id="tspan4211">
          Villeurbanne
        </tspan>
      </text>
      <text id="text4213" y="51301.754" x="588.19867" className="text-xs">
        <tspan id="tspan4215" y="51301.754" x="588.19867">
          Vaulx-en-Velin
        </tspan>
      </text>
      <text id="text3944" y="51397.926" x="702.04291" className="text-xs">
        <tspan id="tspan3947" y="51397.926" x="702.04291">
          Décines-
        </tspan>
        <tspan y="51417.926" x="702.04291" id="tspan3949">
          Charpieu
        </tspan>
      </text>
      <text id="text3951" y="51367.488" x="840.31281" className="text-xs">
        <tspan y="51367.488" x="840.31281" id="tspan3955">
          Meyzieu
        </tspan>
      </text>
      <text className="text-xs" x="948.31281" y="51275.488" id="text3959">
        <tspan id="tspan3961" x="948.31281" y="51275.488">
          Jonage
        </tspan>
      </text>
      <text className="text-xs" x="690.31281" y="51547.488" id="text4001">
        <tspan id="tspan4003" x="690.31281" y="51547.488">
          Chassieu
        </tspan>
      </text>
      <text id="text4005" y="51558.488" x="547.31281" className="text-xs">
        <tspan y="51558.488" x="547.31281" id="tspan4007">
          Bron
        </tspan>
      </text>
      <text className="text-xs" x="657.31281" y="51699.488" id="text4009">
        <tspan id="tspan4011" x="657.31281" y="51699.488">
          Saint-Priest
        </tspan>
      </text>
      <text className="text-xs" x="663.31281" y="51864.488" id="text4013">
        <tspan id="tspan4015" x="663.31281" y="51864.488">
          Mions
        </tspan>
      </text>
      <text id="text4017" y="51839.488" x="537.31281" className="text-xs">
        <tspan y="51839.488" x="537.31281" id="tspan4019">
          Corbas
        </tspan>
      </text>
      <text className="text-xs" x="380.31281" y="51830.488" id="text4021">
        <tspan id="tspan4023" x="380.31281" y="51830.488">
          Feyzin
        </tspan>
      </text>
      <text id="text4025" y="51950.488" x="325.31281" className="text-xs">
        <tspan y="51950.488" x="325.31281" id="tspan4027">
          Solaize
        </tspan>
      </text>
      <text className="text-xs" x="237.31281" y="51919.488" id="text4029">
        <tspan id="tspan4031" x="237.31281" y="51919.488">
          Vernaison
        </tspan>
      </text>
      <text className="text-xs" x="153.31279" y="52124.488" id="text4033">
        <tspan id="tspan4035" x="153.31279" y="52124.488">
          Grigny
        </tspan>
      </text>
      <text id="text4037" y="52222.488" x="71.312798" className="text-xs">
        <tspan y="52222.488" x="71.312798" id="tspan4039">
          Givors
        </tspan>
      </text>
      <text id="text4041" y="51954.488" x="166.31279" className="text-xs">
        <tspan y="51954.488" x="166.31279" id="tspan4043">
          Charly
        </tspan>
      </text>
      <text className="text-xs" x="252.31281" y="51826.488" id="text4045">
        <tspan id="tspan4047" x="252.31281" y="51826.488">
          Irigny
        </tspan>
      </text>
      <text id="text4049" y="51723.488" x="452.31281" className="text-xs">
        <tspan y="51723.488" x="452.31281" id="tspan4051">
          Vénissieux
        </tspan>
      </text>
      <text id="text4053" y="51670.488" x="363.31281" className="text-xs">
        <tspan y="51670.488" x="363.31281" id="tspan4056">
          Saint-
        </tspan>
        <tspan y="51690.488" x="363.31281" id="tspan4058">
          Fons
        </tspan>
      </text>
      <text id="text4060" y="51689.488" x="288.31281" className="text-xs">
        <tspan y="51689.488" x="288.31281" id="tspan4062">
          Pierre-
        </tspan>
        <tspan y="51709.488" x="288.31281" id="tspan4064">
          Bénite
        </tspan>
      </text>
      <text id="text4066" y="51733.488" x="169.31279" className="text-xs">
        <tspan y="51733.488" x="169.31279" id="tspan4068">
          Saint-Genis-
        </tspan>
        <tspan y="51753.488" x="169.31279" id="tspan4070">
          Laval
        </tspan>
      </text>
      <text id="text4072" y="51646.488" x="216.31279" className="text-xs">
        <tspan y="51646.488" x="216.31279" id="tspan4074">
          Oullins
        </tspan>
      </text>
      <text className="text-xs" x="237.31281" y="51576.488" id="text4076">
        <tspan id="tspan4078" x="240.4964" y="51576.488">
          La{" "}
        </tspan>
        <tspan x="237.31281" y="51596.488" id="tspan4080">
          Mulatière
        </tspan>
      </text>
      <text className="text-xs" x="182.31279" y="51524.488" id="text4082">
        <tspan id="tspan4084" x="182.31279" y="51524.488">
          Sainte-
        </tspan>
        <tspan x="182.31279" y="51544.488" id="tspan4088">
          Foy-
        </tspan>
        <tspan x="182.31279" y="51564.488" id="tspan4086">
          lès-Lyon
        </tspan>
      </text>
    </g>
  </svg>
);
export default Map;
