import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Statistiques par ville</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[4rem]">
            Statistiques par ville
          </h1>
          <ul>
            <li>
              <Link className="text-white" href="/lyon">
                Lyon
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
