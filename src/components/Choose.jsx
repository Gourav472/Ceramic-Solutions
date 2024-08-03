import React from 'react'
import CommonHeading from '../common/CommonHeading';
import Icon  from "../common/Icons";

const Choose = () => {
  return (
    <div className='bg-lightPink py-[100px]'>
      <div className="container ">
        <div className="">
            <div className="max-w-[549px]">
                <CommonHeading HeadingName="Why Choose us?" HeadingClass="text-start"/>
                <p className='max-w-[590px] text-black font-normal text-lg leading-7 font-jakarta pt-5'>
                Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. 
                </p>
                <div className='flex gap-5 items-start pt-8'>
                  <Icon iconName="StarIcon" className="cursor-pointer flex" />
                  <div>
                    <p className='text-black font-semibold text-xl leading-8 font-jakarta'>
                    High Quality Materials
                    </p>
                    <p className='max-w-[370px] font-jakarta font-normal text-base leading-6 text-black pt-3'>
                    Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.
                    </p>
                  </div>
                </div>
                <div className='flex gap-5 items-start pt-8'>
                  <Icon iconName="LikeIcon" className="cursor-pointer flex" />
                  <div>
                    <p className='text-black font-semibold text-xl leading-8 font-jakarta'>
                    Durability with Warranty
                    </p>
                    <p className='max-w-[370px] font-jakarta font-normal text-base leading-6 text-black pt-3'>
                    Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.
                    </p>
                  </div>
                </div>
                <div className='flex gap-5 items-start pt-8'>
                  <Icon iconName="PhoneIcon" className="cursor-pointer flex" />
                  <div>
                    <p className='text-black font-semibold text-xl leading-8 font-jakarta'>
                    24/7 Support
                    </p>
                    <p className='max-w-[370px] font-jakarta font-normal text-base leading-6 text-black pt-3'>
                    Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.
                    </p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
