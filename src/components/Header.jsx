import React, { useEffect, useState } from 'react'
import { NAV_ITEMS_DATA } from '../common/Helper';
import ceramicLogo from '../assets/images/svg/ceramic_logo.svg'
import Icon from '../common/Icons';
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
      <div className={`${!show ? "min-h-screen" : ""}`}>
        <div className="flex justify-between items-center bg-white p-[14px_22px_14px_14px] lg:p-4 rounded-3xl ">
          <a className='max-sm:max-w-[97px]' href="/"><img src={ceramicLogo} alt="logo" /></a>
          <ul
            className={`flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[28px] max-lg:fixed max-lg:justify-center custom_duration top-0 max-lg:-right-full max-lg:bg-white max-lg:z-[90] max-lg:h-screen max-lg:w-full ${show ? "" : " !right-0"
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
            <li><button className='lg:hidden font-jakarta font-bold text-base leading-5 text-white flex gap-[10px] bg-red p-[14px_20px] rounded-[56px] custom_duration hover:scale-95'><span><Icon iconName="Phone" /></span>(865) 621-1717</button>
            </li>
          </ul>
          <div className="flex items-center sm:gap-6 gap-3">
            <button className='max-lg:hidden font-jakarta font-bold text-base leading-5 text-white flex gap-[10px] bg-red p-[14px_20px] rounded-[56px] custom_duration hover:scale-95'><span><Icon iconName="Phone" /></span>(865) 621-1717</button>
            <div
              className={`cursor-pointer relative z-[100] lg:hidden ${show ? "" : "cross"}`}
              onClick={() => setShow(!show)}>
              <Icon iconName="MenuIcon" />
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}
export default Header