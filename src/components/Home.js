const Home = () => (
  <div className="flex justify-center pt-6 h-full">
    <div className="sm:pt-16 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 text-center sm:text-left lg:px-0 lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">More than just </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 block">
                  shorter links
                </span>
              </h1>

              <p className="text-gray-300 mt-3 sm:mt-5 text-base md:text-xl">
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </p>
            </div>
          </div>

          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                src="/mainImage.png"
                alt="Man standing by the desk"
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
