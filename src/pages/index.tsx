import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tip Calculator</title>
        <meta name="description" content="Tip calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-cyan-100 min-h-screen flex items-center justify-center">
        <div className="flex p-8 bg-white rounded-3xl shadow-xl">
          <div className="w-1/2 min-w-[300px] mr-8 flex flex-col">
            <div className="mb-10">
              <h1 className="text-sm font-semibold text-gray-500">Bill</h1>
              <input type="text" placeholder="$" className="w-full bg-sky-100/30 p-1.5 rounded-md " />
            </div>
            <div className="mb-8">
              <h1 className="text-sm font-semibold text-gray-600">Select tip %</h1>
              <div className="grid my-4 grid-cols-3 gap-2">
                <div className="text-center text-xl bg-teal-900 p-2 font-bold text-white rounded-md">5%</div>
                <div className="text-center text-xl bg-teal-900 p-2 font-bold text-white rounded-md">10%</div>
                <div className="text-center text-teal-900 p-2 text-xl font-bold bg-teal-400 rounded-md">15%</div>
                <div className="text-center bg-teal-900 p-2 text-xl font-bold text-white rounded-md">25%</div>
                <div className="text-center bg-teal-900 p-2 text-xl font-bold text-white rounded-md">50%</div>
                <div className="text-center font-semibold text-xl  text-teal-700 bg-sky-100/30 rounded-md p-2">Custom</div>
              </div>
            </div>
            <div>
              <h1 className="text-sm text-gray-600 font-semibold">Number of People</h1>
              <input type="text" placeholder="icon" className="w-full bg-sky-100/30 p-1.5 rounded-md " />
            </div>
          </div>
          <div className="w-1/2 min-w-[300px] flex flex-col bg-teal-900 rounded-xl p-10 text-white">
            <div className="flex">
              <div className="w-1/2">
                <h1 className="font-semibold">Tip Amount</h1>
                <h2 className="text-sm text-gray-300">/ person</h2>
              </div>
              <h3 className="ml-auto font-bold text-4xl text-teal-400">$4.27</h3>
            </div>
            <div className="flex mt-8">
              <div className="w-1/2">
                <h1 className="font-semibold">Total</h1>
                <h2 className="text-sm text-gray-300">/ person</h2>
              </div>
              <h3 className="text-4xl font-bold ml-auto text-teal-400">$32.79</h3>
            </div>
            <button className="uppercase font-semibold mt-auto text-teal-900 bg-teal-400 rounded-md p-2">reset</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
