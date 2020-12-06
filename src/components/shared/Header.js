import React from "react";
import Logo from './../../assets/images/logo.svg';

export default function Header(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className="relative shadow-lg bg-primary shadow-lg flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-white text-sm leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              href="https://www.holidu.com/"
            >
              <img src={Logo} className="w-40" alt="Holidu" />
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars" ></i>
            </button>
          </div>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="text-white px-3 py-4 lg:py-2 flex items-center text-md"
                  href="#"
                >
                  <span className="inline-block ml-2">My Bookings</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="text-white px-3 py-4 lg:py-2 flex items-center text-md"
                  href="#"
                >
                  <span className="inline-block ml-2">List your property</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="text-white px-3 py-4 lg:py-2 flex items-center text-md"
                  href="#"
                >
                  <span className="inline-block ml-2">My Favourites</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="text-white px-3 py-4 lg:py-2 flex items-center text-md"
                  href="#"
                >
                  <span className="inline-block ml-2">Login</span>
                </a>
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
}
