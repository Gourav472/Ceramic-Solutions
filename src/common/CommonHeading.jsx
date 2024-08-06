import React from 'react'
const CommonHeading = ({ HeadingClass, HeadingName }) => {
    return (
        <h2 className={`font-jakarta font-semibold capitalize text-custom-2xl leading-10 sm:text-4xl md:text-5xl md:leading-[55px] lg:text-[52px] lg:leading-[60px] xl:text-custom-3xl xl:leading-[70px] text-center text-black ${HeadingClass}`}>{HeadingName}</h2>
    )
} 
export default CommonHeading