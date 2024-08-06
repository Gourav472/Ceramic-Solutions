import React from 'react';
import CommonHeading from '../common/CommonHeading';
import kitchen from "../assets/images/webp/kitchen.webp";
import Icon from '../common/Icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BlogCard = ({ imgSrc, title, link }) => (
    <div className="p-6 shadow-[0px_0px_12px_3px_lightGray] w-full h-full rounded-3xl hover:shadow-offRed hover:shadow-[0px_0px_0px_2px] custom_duration">
        <div className="overflow-hidden rounded-xl">
            <img src={imgSrc} alt="Blog" className='w-full custom_duration hover:scale-105 pointer-events-none cursor-pointer' />
        </div>
        <p className='xl:mt-6 mt-3 font-jakarta font-semibold text-lg xl:text-2xl xl:leading-[38px] text-black'>
            {title}
        </p>
        <a href={link} className='flex items-center gap-2.5 mt-3 xl:mt-6 group w-fit'>
            <p className='font-jakarta font-semibold text-base text-red'>
                Learn more
            </p>
            <Icon iconName="RightArrow" className="mt-0.5 custom_duration group-hover:ml-1 group-hover:scale-110" />
        </a>
    </div>
);
const Blog = () => {
    const repeatCount = 3;
    const ENTRIES = Array.from({ length: repeatCount }, (_, index) => ({
        id: index + 1,
        imgSrc: kitchen,
        title: 'Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.',
        link: "#blog"
    }));
    const SliderSettings = {
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
                display: "flex", justifyContent: "center", position: "absolute", bottom: "-11px", alignItems: "center"
            }}>
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
            }
        ]
    };
    return (
        <div className='xl:pt-[140px] pt-20 sm:pt-24 md:pt-28 pb-14' id='blog'>
            <div className="container">
                <div className="flex flex-col items-center">
                    <CommonHeading HeadingClass="" HeadingName="Our Blog" />
                    <p className='max-w-[592px] font-jakarta text-center font-normal text-sm md:text-lg text-black mt-5'>
                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
                    </p>
                </div>
                <div className="lg:flex lg:justify-center lg:mt-14 mt-8">
                    <div className="lg:flex flex-row -mx-3 hidden">
                        {ENTRIES.map(entry => (
                            <div key={entry.id} className="w-4/12 px-3 mb-6">
                                <BlogCard {...entry} />
                            </div>
                        ))}
                    </div>
                    <div className="lg:hidden we_do_slider">
                        <Slider {...SliderSettings}>
                            {ENTRIES.map(entry => (
                                <div key={entry.id} className="w-full">
                                    <BlogCard {...entry} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
