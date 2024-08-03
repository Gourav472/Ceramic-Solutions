import React from 'react'
import CommonHeading from '../common/CommonHeading'
import Icon from '../common/Icons'
import reviewStar from'../assets/images/svg/review_star.svg'
import profile1 from '../assets/images/svg/profile1.svg'
const Customers = () => {
  return (
    <div className='py-[140px]'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center'>
          <CommonHeading HeadingName="What Our Customers Say" HeadingClass="max-w-[674px] text-center" />
          <p className="max-w-[641px] font-jakarta font-normal text-lg leading-7 text-center pt-5 pb-8 text-black">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
          </p>
          <div className='flex gap-6 pb-14'>
            <div className="flex items-center w-[229px] h-20 gap-3 border-[0.83px] border-gray py-2 px-4 rounded-2xl">
            <Icon iconName='ReviewGoogle' />
              <div>
                <p className='font-normal text-lightBlack font-manrope text-xs leading-4'>
                  Google Review
                </p>
                <div className='flex items-center gap-1'>
                  <p className='font-manrope font-normal text-xl leading-7 text-lightBlack pe-1'>
                    4.6
                  </p>
                  <Icon iconName='YellowStar' />
                  <Icon iconName='YellowStar' />
                  <Icon iconName='YellowStar' />
                  <Icon iconName='YellowStar' />
                  <Icon iconName='YellowStar' />
                </div>
                <p className="font-normal text-lightBlack font-manrope text-xs leading-4">
                  Based on 145 reviews
                </p>
              </div>
            </div>
            <div className="flex items-center w-[228px] h-20 gap-1 border-[0.83px] border-gray py-2 px-2 rounded-2xl">
            <img src={reviewStar} alt="#" />
            <div>
                <p className='font-normal text-lightBlack font-manrope text-xs leading-4'>
                Trust Pilot Review
                </p>
              <div className='flex items-center gap-1'>
                <p className='font-manrope font-normal text-xl leading-7 text-lightBlack pe-1'>
                4.6
                </p>
                <Icon iconName='YellowStar' />
                <Icon iconName='YellowStar' />
                <Icon iconName='YellowStar' />
                <Icon iconName='YellowStar' />
                <Icon iconName='YellowStar' />
              </div>
              <p className="font-normal text-lightBlack font-manrope text-xs leading-4">
              Based on 145 reviews
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
        <img src={profile1} alt="#" />
        <div>
          <p className="font-manrope font-normal">
          Mark T.
          </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers
