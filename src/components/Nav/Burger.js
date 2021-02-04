const MobileNav = ({ active, setActive }) => (
  <div className="flex items-center w-full sm:hidden">
    <button
      type="button"
      id="main-menu"
      onClick={() => setActive(!active)}
      className="bg-gray-600 p-2 rounded-md inline-flex items-center justify-center hover:bg-gray-200 text-white hover:text-gray-500"
    >
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
);

export default MobileNav;
