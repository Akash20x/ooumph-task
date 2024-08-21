import { useState, useEffect, useRef } from "react";
import hamMenu from "../assets/hamMenu.svg";
import closeIcon from "../assets/close-icon.svg"
import SideBarContent from "./SideBarContent";

const SideBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="lg:hidden p-8 w-full fixed top-0 flex items-start justify-between z-50">
        <button onClick={() => setMenuOpen(true)} className="relative z-0">
          <img src={hamMenu} alt="Open Menu" className="w-8" />
        </button>
      </nav>

      <div
        ref={menuRef}
        className={`fixed lg:hidden top-0 left-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
      
      {menuOpen && (
        <div className="absolute left-[9rem] top-4" onClick={() => setMenuOpen(false)}>

                        <img src={closeIcon} alt="Close" className='w-7' />
        </div>
                )}
                  

        <SideBarContent />
      </div>

      <div className="hidden lg:block">
        <SideBarContent />
      </div>
    </>
  );
};

export default SideBar;
