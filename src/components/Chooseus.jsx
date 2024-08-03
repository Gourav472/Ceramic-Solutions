import React from 'react'
import CommonHeading from '../common/CommonHeading'
import { StarIcon } from '../common/Icons'

const Chooseus = () => {
  return (
    <div className='bg-lightPink py-[100px]'>
      <div className="container ">
        <div className="">
            <div className="max-w-[549px]">
                <CommonHeading HeadingName="Why Choose us?" HeadingClass="text-start"/>
                <p className='max-w-[590px] text-black font-normal text-lg leading-7 font-jakarta pt-5'>
                Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. 
                </p>
                <div className='flex gap-5'>
                  <a href="/"><StarIcon/></a>
                  <div>
                    <p className='max-w-[210px] text-black font-semibold text-xl leading-8 font-jakarta'>
                    High Quality Materials
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

export default Chooseus
