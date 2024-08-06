import React, { useState } from 'react';
import CommonHeading from '../common/CommonHeading';
import { ACCORDION_DATA } from "../common/Helper";
import Icon from '../common/Icons';
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const HANDLE_TOGGLE = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='xl:pt-20 pt-7 pb-14'>
      <div className="container mt-1">
        <div className="flex flex-col items-center">
          <CommonHeading HeadingName="Frequently Asked Questions" />
          <p className='max-w-[592px] font-jakarta text-center font-normal text-base md:text-lg text-black mt-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
        </div>
        <div className="pt-11">
          {ACCORDION_DATA.map((item, index) => (
            <div key={index} className="w-full flex mx-auto max-w-[912px] mt-6 justify-center relative duration-500 ease-linear" data-aos="zoom-in-up" data-aos-duration="1500">
              <div className="accordion w-full">
                <div
                  className="duration-700 ease-linear accordion-header relative z-[1] px-5 flex items-center justify-between rounded-2xl bg-white shadow-4xl gap-1.5 cursor-pointer p-5"
                  onClick={() => HANDLE_TOGGLE(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-start sm:items-center gap-1.5">
                    <h3 className="text-black font-jakarta font-normal text-base sm:text-lg">{item.title}</h3>
                  </div>
                  <Icon iconName="AccordionIcon" className={`${openIndex === index ? 'rotate-180' : ''} duration-500 ease-linear`} />
                </div>
                <div className="overflow-hidden relative">
                  <div
                    className={`accordion-content flex items-start gap-3 pl-5 pb-[15.2px] max-w-[759px] w-full duration-300 ease-linear ${openIndex === index ? ' relative top-5' : '-translate-y-full -top-5 absolute'}`}
                  >
                    <p className='text-black font-jakarta text-base font-normal opacity-70'>{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Faq
