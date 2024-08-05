import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonBtn from '../common/CommonBtn'
const InTouch = () => {
    return (
        <div className='container'>
            <div className='bg-touch_bg bg-no-repeat sm:bg-full bg-cover rounded-3xl'>
                <div className='md:py-16 sm:py-11 py-9 px-6 flex flex-col justify-center items-center'>
                    <CommonHeading HeadingName="Interested?" HeadingClass="max-w-[547px] text-white text-center" />
                    <CommonHeading HeadingName="Get In Touch With Us" HeadingClass="sm:max-w-[547px] max-w-[259px] text-white text-center" />
                    <p className="max-w-[592px] text-center font-jakarta font-normal sm:text-lg text-base sm:leading-7 leading-6 text-white sm:pt-5 pt-4 sm:pb-9 pb-8">
                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt.
                    </p>
                    <CommonBtn ButtonName='Get a Quote' ButtonClass='text-red bg-white max-w-[173px] sm:flex justify-center items-center hidden w-full h-[63px]' />
                    <CommonBtn ButtonName='Contact Us' ButtonClass='text-red bg-white max-w-[135px] sm:hidden justify-center items-center flex w-full h-[56px] max-sm:py-[18px]' />
                </div>
            </div>
        </div>
    )
}
export default InTouch
