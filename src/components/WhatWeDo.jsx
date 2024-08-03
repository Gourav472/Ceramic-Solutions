import React from 'react'
import CommonHeading from '../common/CommonHeading'
import Icon from '../common/Icons'
import { WHAT_DO_CARDS } from '../common/Helper'
const WhatWeDo = () => {
    return (
        <div className=' py-[140px]'>
            <div className=' container'>
                <CommonHeading HeadingName="What We Do" />
                <div className=' flex flex-wrap flex-row -mx-3 pt-8'>
                    {WHAT_DO_CARDS.map((index) =>(
                    <div key={index} className=' px-3 mt-6 w-4/12'>
                            <div  className=' p-6 rounded-3xl flex flex-col cursor-pointer border border-offBlack hover:border-transparent custom_duration min-h-[470px] shadow-3xl '>
                            <img className=' pointer-events-none max-w-[316px] w-full' src={index.image} alt={index.image} />
                            <p className=' font-jakarta font-semibold text-2xl leading-[38px] text-black pt-6'>{index.heading}</p>
                            <p className=' font-jakarta font-normal text-base leading-6 text-black pt-3'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.</p>
                            <div className=' flex gap-[10px] pt-6 items-center'>
                                <p className=' font-jakarta font-semibold text-base leading-6 text-red'>Learn more</p>
                                <Icon iconName="RightIcon" />
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo