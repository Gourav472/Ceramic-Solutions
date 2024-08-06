import React, { useEffect, useState } from 'react';
import Scroll from "../assets/images/svg/scrolltotop.svg";

const ScrollToTop = () => {
    const SCROLL_TO_TOP = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [visible, setvisible] = useState(false);
    const TOGGLE_VISIBLE = () => {
        const scrolled = window.scrollY;
        if (scrolled > 400) {
            setvisible(true);
        } else {
            setvisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', TOGGLE_VISIBLE);
        return () => {
            window.removeEventListener('scroll', TOGGLE_VISIBLE);
        };
    }, []); 
    return (
        <div
            onClick={SCROLL_TO_TOP}
            className="animate-bounce place-items-center xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 rounded-full fixed right-[3%] bottom-[4%] cursor-pointer shadow-[0_0_10px_red_inset] duration-300 ease-linear z-10"
            style={{ display: visible ? 'grid' : 'none' }}
        >
            <img src={Scroll} alt="Scroll to Top" className='lg:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6' />
        </div>
    );
};

export default ScrollToTop;
