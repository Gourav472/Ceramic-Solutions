import React from 'react'
import CommonHeading from '../common/CommonHeading'

const Blog = () => {
    return (
        <div className='py-1'>
            <div className="container">
                <div className="flex flex-col items-center">
                    <CommonHeading HeadingClass="" HeadingName="Our Blog" />
                    <p className='max-w-[592px] font-jakarta text-center font-normal text-lg text-black mt-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
                </div>
                <div className="flex flex-row w-full -mx-3 mt-14">
                    <div className="w-4/12 px-3">
                        <div className="p-6 shadow-[0px_0px_12px_3px_lightGray] w-full h-full rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
