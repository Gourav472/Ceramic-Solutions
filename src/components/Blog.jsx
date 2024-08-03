import React from 'react'
import CommonHeading from '../common/CommonHeading';
import kitchen from "../assets/images/webp/kitchen.png";
import Icon from '../common/Icons';

const Blog = () => {
    const repeatCount = 3;

    const ENTRIES = Array.from({ length: repeatCount }, (_, index) => ({
        id: index + 1
    }));
    return (
        <div className='pt-1 pb-14' id='blog'>
            <div className="container">
                <div className="flex flex-col items-center">
                    <CommonHeading HeadingClass="" HeadingName="Our Blog" />
                    <p className='max-w-[592px] font-jakarta text-center font-normal text-lg text-black mt-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
                </div>
                <div className="lg:flex lg:justify-center lg:mt-14 mt-8">
                    <div className="lg:flex flex-row w-full -mx-3 hidden">
                        {ENTRIES.map((item) => (
                            <div key={item.id} className="w-4/12 px-3 mb-6">
                                <div className="p-6 shadow-[0px_0px_12px_3px_lightGray] w-full h-full rounded-3xl">
                                    <img src={kitchen} alt="kitchen" className='w-full' />
                                    <p className='xl:mt-6 mt-3 font-jakarta font-semibold text-lg xl:text-2xl xl:leading-[38px] text-black'>
                                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
                                    </p>
                                    <a href="#blog" className='flex items-center gap-2.5 mt-3 xl:mt-6'>
                                        <p className='font-jakarta font-semibold text-base text-red'>
                                            Learn more
                                        </p>
                                        <Icon iconName="RightArrow" className="mt-0.5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
