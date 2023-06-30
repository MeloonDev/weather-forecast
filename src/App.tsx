function App() {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-purple-500 to-rose-500 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls drop-shadow-lg rounded text-zinc-700 ">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black ">Forecast</span>
        </h1>
        <p className="text-sm mt-2">
          Enter below a place you want to know the weather
        </p>
        <div className="flex mt-10 md:mt-4">
          <input
            type="text"
            value={"h"}
            className="px-2 py-1 rounded-l-md border-2 border-white focus:outline-none"
          />
          <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer">
            search
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
