import React from 'react'
const CommonHeading = ({ HeadingClass, HeadingName }) => {
    return (
        <h2 className={`font-jakarta font-semibold md:text-custom-3xl sm:text-4xl text-custom-2xl md:leading-[70px] leading-10 text-center text-black ${HeadingClass}`}>{HeadingName}</h2>
    )
} 
export default CommonHeading