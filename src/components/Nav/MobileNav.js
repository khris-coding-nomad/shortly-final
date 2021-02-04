import { navLinks } from "./Nav";

const MobileNav = ({ active, setActive }) => (
  <div className="absolute top-0 inset-x-0 p-2 transition origin-top sm:hidden">
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="flex mt-2 items-center justify-end">
        <div className="mr-2">
          <button
            type="button"
            onClick={() => setActive(!active)}
            className="bg-white text-gray-600 text-lg font-bold inline-flex items-center justify-center hover:bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        role="menu"
        area-aria-orientation="vertical"
        className="px-2 space-y-1"
        aria-labelledby="main-menu"
      >
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={
              item.name === "Shortly"
                ? "block text-indigo-600 px-3 py-2  text-lg font-bold hover:bg-gray-50 hover:text-indigo-500"
                : "block text-gray-900 text-base px-3 py-2 font-medium hover:bg-gray-50 hover:text-gray-600"
            }
          >
            {item.name}
          </a>
        ))}
      </div>
      <div
        role="none"
        className="mt-4 px-5 py-4 text-center border-t border-gray-200"
      >
        <a
          href="/"
          className="text-gray-900 text-base font-medium hover:text-gray-600"
        >
          Log in
        </a>
        <a
          href="/"
          className="text-gray-900 ml-4 text-base font-medium hover:text-gray-600"
        >
          Sign up
        </a>
      </div>
    </div>
  </div>
);

export default MobileNav;
