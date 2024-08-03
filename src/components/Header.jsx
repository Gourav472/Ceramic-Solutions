import React, { useEffect, useState } from 'react'
import { NAV_ITEMS_DATA } from '../common/Helper';
const Header = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const HANDLE_RESIZE = () => {
      if (window.innerWidth < 992) {
        document.body.style.overflow = show ? "visible" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };
    HANDLE_RESIZE();
    window.addEventListener("resize", HANDLE_RESIZE);
    return () => {
      window.removeEventListener("resize", HANDLE_RESIZE);
      document.body.style.overflow = "";
    };
  }, [show]);
  const HANDLE_CLICK = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth < 992) {
      setShow(!show);
    } else {
      e.preventDefault();
    }
  };
  return (
    <>
      <div className={`bg-header_bg relative bg-no-repeat bg-cover ${!show ? "min-h-screen" : ""}`}>
        <div className='container max-w-[1164px] relative z-20 '>
          <div className="flex justify-between items-center pt-[6px] pb-2">
            
            <ul
              className={`flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[32px] max-lg:fixed max-lg:justify-center custom_duration top-0 max-lg:-right-full max-lg:bg-black max-lg:z-[90] max-lg:h-screen max-lg:w-full ${show ? "" : " !right-0"
                }`}
            >
              {NAV_ITEMS_DATA.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => HANDLE_CLICK(e, item.href.substring(1))}
                    className={item.className}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            
            </ul>
            <div className="flex items-center sm:gap-6 gap-3">
           
              <div
                className={`cursor-pointer relative z-[100] lg:hidden max-sm:scale-75 ${show ? "" : "cross" }`}
                onClick={() => setShow(!show)}>
                <span className="nav-toggle-items "></span>
                <span className="nav-toggle-items my-2"></span>
                <span className="nav-toggle-items "></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header