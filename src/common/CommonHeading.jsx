import React from 'react'

const CommonHeading = ({ HeadingClass, HeadingName }) => {
    return (
        <h2 className={`font-jakarta font-semibold text-custom-3xl leading-[70px] text-center text-black ${HeadingClass}`}>{HeadingName}</h2>
    )
}

export default CommonHeading