import React from 'react'

const CommonBtn = ({ButtonName, ButtonClass}) => {
    return (
        <button className={`${ButtonClass} border-[1px] border-red py-4 duration-300 ease-linear px-[27px] lg:px-8 font-jakarta font-bold text-lg rounded-[56px]`}>{ButtonName}</button>
    )
}

export default CommonBtn
