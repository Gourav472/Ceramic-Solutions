import React from 'react'
import CommonHeading from '../common/CommonHeading'
import Icon from '../common/Icons'
import reviewStar from '../assets/images/svg/review_star.svg'
import profile1 from '../assets/images/svg/profile1.svg'
import profile2 from '../assets/images/svg/profile2.svg'
import profile3 from '../assets/images/svg/profile3.svg'
import profile4 from '../assets/images/svg/profile4.svg'
import profile5 from '../assets/images/svg/profile5.svg'
import Slider from 'react-slick'
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
          slidesToScroll: 1,
          centerPadding: "150px",
        }
      },
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "100px",
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "120px",
          
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          centerPadding: "0",
        }
      },
    ],
  };
  return (
    <div className='lg:pt-[140px] lg:pb-[124px] md:pt-24 pt-20 md:pb-24px pb-[70px]'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center'>
          <CommonHeading HeadingName="What Our Customers Say" HeadingClass="sm:max-w-[674px] max-w-[300px] text-center" />
          <p className="max-w-[641px] font-jakarta font-normal sm:text-lg text-sm sm:leading-7 leading-5 text-center sm:pt-5 pt-4 pb-8 text-black">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
          </p>
          <div className='flex sm:flex-row flex-col gap-6 sm:pb-12 pb-5'>
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
          <div className='bg-white rounded-3xl sm:shadow-4xl shadow-6xl h-[281px] sm:max-w-[364px] max-w-[342px] w-full sm:h-[320px] lg:h-[340px] xl:h-[330px] 2xl:h-[281px] p-6 my-4'>
            <div className='flex items-center gap-2'>
              <img src={profile1} alt="#" />
              <div>
                <p className="font-manrope font-semibold text-base leading-6 text-black">
                  Mark T.
                </p>
                <p className='font-normal font-manrope text-sm leading-[22px] text-black'>
                  Fitness enthusiast
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
              "As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”
            </p>
          </div>
          <div className='bg-white rounded-3xl sm:shadow-4xl shadow-6xl h-[281px] sm:max-w-[364px] max-w-[342px] w-full sm:h-[320px] lg:h-[340px] xl:h-[330px] 2xl:h-[281px] p-6 my-4'>
            <div className='flex items-center gap-2'>
              <img src={profile2} alt="#" />
              <div>
                <p className="font-manrope font-semibold text-base leading-6 text-black">
                  Mark T.
                </p>
                <p className='font-normal font-manrope text-sm leading-[22px] text-black'>
                  Fitness enthusiast
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
              "As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”
            </p>
          </div>
          <div className='bg-white rounded-3xl sm:shadow-4xl shadow-6xl h-[281px] sm:max-w-[364px] max-w-[342px] w-full sm:h-[320px] lg:h-[340px] xl:h-[330px] 2xl:h-[281px] p-6 my-4'>
            <div className='flex items-center gap-2'>
              <img src={profile3} alt="#" />
              <div>
                <p className="font-manrope font-semibold text-base leading-6 text-black">
                  Mark T.
                </p>
                <p className='font-normal font-manrope text-sm leading-[22px] text-black'>
                  Fitness enthusiast
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
              "As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”
            </p>
          </div>
          <div className='bg-white rounded-3xl sm:shadow-4xl shadow-6xl h-[281px] sm:max-w-[364px] max-w-[342px] w-full sm:h-[320px] lg:h-[340px] xl:h-[330px] 2xl:h-[281px] p-6 my-4'>
            <div className='flex items-center gap-2'>
              <img src={profile4} alt="#" />
              <div>
                <p className="font-manrope font-semibold text-base leading-6 text-black">
                  Mark T.
                </p>
                <p className='font-normal font-manrope text-sm leading-[22px] text-black'>
                  Fitness enthusiast
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
              "As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”
            </p>
          </div>
          <div className='bg-white rounded-3xl sm:shadow-4xl shadow-6xl h-[281px] sm:max-w-[364px] max-w-[342px] w-full sm:h-[320px] lg:h-[340px] xl:h-[330px] 2xl:h-[281px] p-6 my-4'>
            <div className='flex items-center gap-2'>
              <img src={profile5} alt="#" />
              <div>
                <p className="font-manrope font-semibold text-base leading-6 text-black">
                  Mark T.
                </p>
                <p className='font-normal font-manrope text-sm leading-[22px] text-black'>
                  Fitness enthusiast
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
              "As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”
            </p>
          </div>
        </Slider>
      </div>
    </div>
  )
}
export default Customers
