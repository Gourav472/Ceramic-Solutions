import React from 'react'
import CommonHeading from '../common/CommonHeading'
import Icon from '../common/Icons'
import { WHAT_CARDS_SLIDER, WHAT_DO_CARDS } from '../common/Helper'
import Slider from "react-slick";
const WhatWeDo = () => {
    var settings_do = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={{
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: "-11px",
                alignItems: "center"
            }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },]
    };
    return (
        <div id='about' className='pt-[76px] pb-[90px] md:py-[140.5px]'>
            <div className='container px-[7px]'>
                <CommonHeading HeadingName="What We Do" />
                <div className='max-lg:hidden flex flex-wrap flex-row -mx-3 pt-8'>
                    {WHAT_DO_CARDS.map((index) => (
                        <div key={index} className='px-3 mt-6 w-6/12 lg:w-4/12'>
                            <div className='p-6 rounded-3xl max-w-[364px] xl:max-w-full w-full flex flex-col border border-offBlack hover:border-transparent custom_duration min-h-[400px] xl:min-h-[470px] shadow-3xl '>
                                <img className='pointer-events-none max-w-[316px] xl:w-[316px] xl:h-[246px] w-full' src={index.image} alt={index.image} />
                                <p className='font-jakarta font-semibold text-xl xl:text-2xl leading-7 xl:leading-[38px] text-black pt-6'>{index.heading}</p>
                                <p className='font-jakarta font-normal text-base leading-6 text-black pt-3'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.</p>
                                <a href='#learn' className='flex w-fit gap-[10px] mt-6 items-center ont-jakarta font-semibold text-base leading-6 text-red'>
                                    Learn more
                                    <Icon iconName="RightIcon" className="mt-0.5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='pt-[17px] mx-auto we_do_slider lg:hidden'>
                    <Slider {...settings_do}>
                        {WHAT_CARDS_SLIDER.map((index) => (
                            <div key={index} className='p-6 rounded-3xl flex flex-col max-w-[342px] w-full border-offBlack custom_duration max-sm:min-h-[456px] sm:min-h-[400px] shadow-3xl '>
                                <img className='max-sm:w-[294px] max-sm:h-[246px] sm:max-w-[294px] sm:w-full pointer-events-none' src={index.image} alt={index.image} />
                                <p className='font-jakarta font-semibold text-xl leading-8 text-black pt-6'>{index.heading}</p>
                                <p className='font-jakarta font-normal text-sm leading-[22px] text-black pt-3'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.</p>
                                <a href='#learn' className='flex w-fit gap-[10px] mt-6 items-center ont-jakarta font-semibold text-base leading-6 text-red'>
                                    Learn more
                                    <Icon iconName="RightIcon" className="mt-0.5" />
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default WhatWeDo