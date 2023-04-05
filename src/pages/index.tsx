import { type NextPage } from "next";
import Head from "next/head";
import { type } from "os";
import { use, useState } from "react";

const Home: NextPage = () => {
  let [billVal, setBillVal] = useState('')
  let billAsNumber = Number(parseFloat(billVal).toFixed(2))

  let [peopleVal, setPeopleVal] = useState('')
  const peopleAsNumber = Number(peopleVal)

  const [tip, setTip] = useState(0.00)
  let total = Number(parseFloat(String(billAsNumber / peopleAsNumber + tip)).toFixed(2))

  const calculate = (percent: number) => Number(parseFloat(String((billAsNumber * percent / 100 / peopleAsNumber))).toFixed(2))


  return (
    <>
      <Head>
        <title>Tip Calculator</title>
        <meta name="description" content="Tip calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-cyan-100 min-h-screen flex items-center justify-center font-SpaceMono">
        <div className="flex max-w-[75vw] p-8 bg-white rounded-3xl shadow-xl">
          <div className="w-1/2 mr-8 flex flex-col">
            <div className="mb-10">
              <h1 className="text-sm font-semibold text-gray-500">Bill</h1>
              <label>
                <input value={billVal} onChange={e => setBillVal(e.target.value)} dir="rtl" type="text" placeholder="0" className="w-full bg-sky-100/30 bg-[url('/icon-dollar.svg')] bg-no-repeat bg-origin-content px-3 bg-left text-2xl p-1.5 rounded-md text-teal-900" />
              </label>
            </div>
            <div className="mb-8">
              <h1 className="text-sm font-semibold text-gray-600">Select tip %</h1>
              <div className="grid my-4 grid-cols-3 gap-2">
                <div onClick={() => setTip(calculate(5))} className="text-center text-xl bg-teal-900 p-2 font-bold text-white rounded-md">5%</div>
                <div onClick={() => setTip(calculate(10))} className="text-center text-xl bg-teal-900 p-2 font-bold text-white rounded-md">10%</div>
                <div onClick={() => setTip(calculate(15))} className="text-center text-teal-900 p-2 text-xl font-bold bg-teal-400 rounded-md">15%</div>
                <div onClick={() => setTip(calculate(25))} className="text-center bg-teal-900 p-2 text-xl font-bold text-white rounded-md">25%</div>
                <div onClick={() => setTip(calculate(50))} className="text-center bg-teal-900 p-2 text-xl font-bold text-white rounded-md">50%</div>
                <div onClick={() => setTip(calculate(50))} className="">
                  <input onClick={() => setTip(calculate(5))} dir="rtl" type="text" placeholder="Custom" className="w-full font-semibold text-xl  text-teal-900  bg-sky-100/30 rounded-md p-2" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex ">
                <h1 className="text-sm text-gray-600 font-semibold">Number of People</h1>
                <h1 className={`text-sm text-red-600/70 font-bold ml-auto transition-all ${peopleAsNumber == 0 ? 'opacity-100' : 'opacity-0'}`}>Can't be zero</h1>
              </div>
              <label>
                <input value={peopleVal} onChange={e => setPeopleVal(e.target.value)} dir="rtl" type="text" placeholder="0" className={`w-full bg-sky-100/30 text-teal-900 bg-[url('/icon-person.svg')] bg-no-repeat bg-origin-content p-1.5 px-3 bg-left text-2xl rounded-md transition-all ${peopleAsNumber == 0 ? 'border-2 border-red-600/70' : 'border-none'}`} />
              </label>
            </div>
          </div>
          <div className="w-1/2 flex flex-col bg-teal-900 rounded-xl p-10 text-white">
            <div className="flex">
              <div className="w-1/2">
                <h1 className="font-semibold">Tip Amount</h1>
                <h2 className="text-sm text-gray-300">/ person</h2>
              </div>
              <h3 className="ml-auto font-bold text-4xl text-teal-400">${(peopleAsNumber > 0 && billAsNumber > 0) ? tip : '0.00'}</h3>
            </div>
            <div className="flex mt-8">
              <div className="w-1/2">
                <h1 className="font-semibold">Total</h1>
                <h2 className="text-sm text-gray-300">/ person</h2>
              </div>
              <h3 className="text-4xl font-bold ml-auto text-teal-400">${(peopleAsNumber > 0 && billAsNumber > 0) ? total : '0.00'}</h3>
            </div>
            <button onClick={() => setTip(0)} className="uppercase font-semibold mt-auto text-teal-900 bg-teal-400 rounded-md p-2">reset</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
