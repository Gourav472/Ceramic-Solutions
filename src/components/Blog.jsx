import React from 'react'
import CommonHeading from '../common/CommonHeading';
import kitchen from "../assets/images/webp/kitchen.png";
import Icon from '../common/Icons';
import { BLOG_DATA } from '../common/Helper';

const Blog = () => {
    return (
        <div className='py-1' id='blog'>
            <div className="container">
                <div className="flex flex-col items-center">
                    <CommonHeading HeadingClass="" HeadingName="Our Blog" />
                    <p className='max-w-[592px] font-jakarta text-center font-normal text-lg text-black mt-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-row w-full -mx-3 mt-14">
                        {BLOG_DATA.map((i) => (
                            <div key={i.id} className="w-4/12 px-3">
                                <div className="p-6 shadow-[0px_0px_12px_3px_lightGray] w-full h-full rounded-3xl">
                                    <img src={kitchen} alt="kitchen" className='w-full' />
                                    <p className='mt-6 font-jakarta font-semibold text-xl xl:text-2xl xl:leading-[38px] text-black'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                                    <a href="#blog" className='flex items-center gap-2.5 mt-6'>
                                        <p className='font-jakarta font-semibold text-base text-red'>Learn more</p>
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
