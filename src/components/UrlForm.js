import { memo } from "react";

const UrlForm = () => (
  <div className="mt-10 sm:mt-12">
    <form className="sm:mx-auto lg:mx-0">
      <div className="sm:flex">
        <div className="min-w-0 flex-1">
          <label htmlFor="url" className="sr-only">
            URL Input
          </label>
          <input
            type="text"
            name="url"
            placeholder="Place your link here..."
            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            className="block w-full py-3 px-4 h-12 rounded-md shadow bg-gradient-to-r from-indigo-200 to-indigo-400 text-white font-bold hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          >
            Shorten it!
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default memo(UrlForm);
