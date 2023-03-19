import { type NextPage } from "next";
import Head from "next/head";
import Map from "~/components/MapSvg.lyon";
import { ZONES } from "~/data/data.global";

import { api } from "~/utils/api";

export const getServerSideProps = ({
  params,
}: {
  params: { zone: string };
}) => {
  return {
    props: {
      zone: params.zone,
    },
  };
};

type Props = {
  zone: string;
};

const Zone: NextPage<Props> = ({ zone }) => {
  const map = api.cities.getMap.useQuery({ zone });
  const zoneLabel = ZONES.find((z) => z.name === zone)?.label;

  return (
    <>
      <Head>
        <title>Statistiques {zoneLabel}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Statistiques{" "}
            <span className="text-[hsl(280,100%,70%)]">{zoneLabel}</span>
          </h1>
          {zone === "lyon" && (
            <Map
              cities={map.data ? map.data.cities : []}
              districts={map.data ? map.data.districts : []}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default Zone;
