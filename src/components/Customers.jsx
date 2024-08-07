import React from 'react'
import CommonHeading from '../common/CommonHeading'
import Icon from '../common/Icons'
import reviewStar from '../assets/images/svg/review_star.svg'

import Slider from 'react-slick'
import { SLIDER_DATA } from '../common/Helper'

const Customers = () => {

  var settings1 = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    centerPadding: "139px",
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          centerPadding: "150px",
        }
      },
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 2,
          centerPadding: "100px",
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          centerPadding: "120px",
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
          centerPadding: "0",
        }
      },
    ],
  };

  return (
    <div className='lg:pt-[140px] md:pt-24 pt-20'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center'>
          <CommonHeading HeadingName="What Our Customers Say" HeadingClass="sm:max-w-[674px] max-w-[300px] text-center" />
          <p className="max-w-[641px] font-jakarta font-normal sm:text-lg text-sm sm:leading-7 leading-5 text-center sm:pt-5 pt-4 pb-8 text-black">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
          </p>
          <div className='flex sm:flex-row flex-col gap-6'>
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
      <div className='customer_slider max-w-[1440px] max-sm:max-w-[380px] mx-auto'>
        <Slider {...settings1}>
          {SLIDER_DATA.map((customer, index) => (
            <div key={index} className='bg-white rounded-3xl sm:shadow-4xl shadow-6xl h-[281px] sm:max-w-[364px] max-w-[342px] w-full sm:h-[320px] lg:h-[340px] xl:h-[330px] 2xl:h-[281px] p-6 my-4'>
              <div className='flex items-center gap-2'>
                <img src={customer.profileImage} alt={customer.name} />
                <div>
                  <p className="font-manrope font-semibold text-base leading-6 text-black">
                    {customer.name}
                  </p>
                  <p className='font-normal font-manrope text-sm leading-[22px] text-black'>
                    {customer.title}
                  </p>
                </div>
              </div>
              <div className='flex gap-1 py-4'>
                <Icon iconName='SliderIcon' />
                <Icon iconName='SliderIcon' />
                <Icon iconName='SliderIcon' />
                <Icon iconName='SliderIcon' />
                <Icon iconName='SliderIcon' />
              </div>
              <p className="max-w-[316px] font-normal font-manrope sm:text-base text-sm sm:leading-6 leading-5 text-black">
                {customer.review}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Customers
