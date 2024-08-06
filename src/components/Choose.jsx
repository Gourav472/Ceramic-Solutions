import React from 'react'
import CommonHeading from '../common/CommonHeading';
import Icon from "../common/Icons";
import chooseImg from '../assets/images/webp/choose_img.webp'
import CommonBtn from '../common/CommonBtn';
const Choose = () => {
  return (
    <div id='services' className='bg-lightPink lg:py-[104px] md:py-20 sm:py-[70px] py-16'>
      <div className="container">
        <div className="flex lg:flex-row flex-col sm:items-center">
          <div className="max-w-[590px] w-full">
            <CommonHeading HeadingName="Why Choose us?" HeadingClass="text-start" />
            <p className='max-w-[590px] text-black font-normal sm:text-lg text-base sm:leading-7 leading-6 font-jakarta sm:pt-5 pt-4'>
              Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt.
            </p>
            <div className='flex gap-5 items-start sm:pt-8 pt-[34px]'>
              <Icon iconName="StarIcon" className="cursor-pointer flex" />
              <div className='flex flex-col gap-3'>
                <p className='text-black font-semibold text-xl leading-8 font-jakarta'>
                  High Quality Materials
                </p>
                <p className='max-w-[370px] font-jakarta font-normal sm:text-base text-sm sm:leading-6 leading-5 text-black'>
                  Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.
                </p>
              </div>
            </div>
            <div className='flex gap-5 items-start sm:pt-6 pt-7'>
              <Icon iconName="LikeIcon" className="cursor-pointer flex" />
              <div className='flex flex-col gap-3'>
                <p className='text-black font-semibold text-xl leading-8 font-jakarta'>
                  Durability with Warranty
                </p>
                <p className='max-w-[370px] font-jakarta font-normal sm:text-base text-sm sm:leading-6 leading-5 text-black '>
                  Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.
                </p>
              </div>
            </div>
            <div className='flex gap-5 items-start sm:pt-6 pt-7 sm:pb-11 pb-10'>
              <Icon iconName="PhoneIcon" className="cursor-pointer flex" />
              <div className='flex flex-col gap-3'>
                <p className='text-black font-semibold text-xl leading-8 font-jakarta'>
                  24/7 Support
                </p>
                <p className='max-w-[370px] font-jakarta font-normal sm:text-base text-sm sm:leading-6 leading-5 text-black'>
                  Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.
                </p>
              </div>
            </div>
            <CommonBtn ButtonName='Get a Quote' ButtonClass='text-white bg-red max-w-[173px] w-full h-[63px]' />
          </div>
          <div className='lg:max-w-[549px] max-w-[400px] max-lg:mx-auto w-full sm:flex hidden justify-end relative pb-20 lg:mt-0 mt-8'>
            <img className='xl:max-w-[469px] lg:max-w-[400px] max-w-[330px] lg:min-h-[523px] min-h-[370px] z-10 w-full' src={chooseImg} alt="#" />
            <div className='md:max-w-[300px] max-w-[250px] w-full lg:min-h-[396px] min-h-[270px] absolute lg:left-0 left-[4%] lg:bottom-[1%] bottom-[4%] rounded-3xl bg-red'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Choose
