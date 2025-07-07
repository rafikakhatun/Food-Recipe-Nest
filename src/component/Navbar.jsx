import { useState } from "react";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="w-full p-2 shadow bg-white fixed top-0 z-50 ">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="p-2">
            <img className="w-16 h-16" src="src/assets/logo.jpeg" alt="logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            <li className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-green-500">HOME</li>
            <li className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-green-500">ABOUT</li>
            <li className="text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-green-500">RECIPE</li>
            <li className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-green-500">BLOG</li>
            <li className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-green-500">CONTACT</li>
          </ul>

          {/* Desktop Search */}
          <div className="hidden md:flex p-4 gap-2">
            <input
              className="px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 outline-none"
              type="text"
              placeholder="search..."
            />
            <FontAwesomeIcon icon={faSearch} className="p-3 bg-gray-100 text-gray-600 rounded-full" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pt-4 pb-6 bg-white shadow rounded-b-lg">
            <ul className="flex flex-col gap-4 mb-4">
              <li className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-green-500">HOME</li>
              <li className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-green-500">ABOUT</li>
              <li className="text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-green-500">RECIPE</li>
              <li className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-green-500">BLOG</li>
              <li className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-green-500">CONTACT</li>
            </ul>

            {/* Search Bar in mobile */}
            <div className="flex gap-2">
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 outline-none"
                type="text"
                placeholder="search..."
              />
              <FontAwesomeIcon icon={faSearch} className="p-3 bg-gray-100 text-gray-600 rounded-full" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Navbar;
