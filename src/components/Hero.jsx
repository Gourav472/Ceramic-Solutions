import React from 'react'
import Header from './Header'
import CommonBtn from '../common/CommonBtn'
import Icon from '../common/Icons'
import greenStar from '../assets/images/svg/green_star.svg'
import certifiedIcon from '../assets/images/svg/certified_icon.svg'
import awardIcon from '../assets/images/svg/award_icon.svg'
const Hero = () => {
    return (
        <div className='bg-hero_bg bg-cover bg-center pt-[33px] sm:pt-7 md:pt-6 pb-[72px] sm:pb-16 lg::pb-[59px] bg-no-repeat'>
            <div className='container'>
                <Header />
                <div className='flex flex-col pt-[80px]'>
                    <h1 className='lg:max-w-[830px] text-white font-jakarta font-semibold text-custom-2xl sm:text-4xl sm:leading-[44px] md:text-5xl md:leading-[65px] leading-10 lg:text-6xl lg:leading-[75px] xl:text-[64px] xl:leading-[80px]'>Transform Your Space with Precision and Quality: <span className=' lg:block'>Get a Free Quote Today!</span></h1>
                    <p className='max-w-[742px] text-white font-jakarta font-normal text-base lg:text-[18px] leading-[25px] lg:leading-7 pt-4 md:pt-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma sol: teroktig,</p>
                </div>
                <div className='pt-7 md:pt-9'>
                    <CommonBtn ButtonName="Get a Quote" ButtonClass="bg-red max-lg:px-8 text-white hover:" />
                </div>
                <div className='flex flex-wrap items-center gap-6 pt-[64px]'>
                    <div className='bg-white rounded-2xl border-[0.83px] flex items-center gap-[10px] p-[8px_45px_6px_16px] border-gray max-w-[229px] w-full min-h-[80px]'>
                        <div className='pointer-events-none'>
                            <Icon iconName="ReviewGoogle" />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-manrope font-normal text-xs text-lightBlack leading-[19px]'>Google Review</p>
                            <div className='flex gap-1 items-center'>
                                <p className='font-manrope font-normal text-xl leading-6 text-lightBlack'>4.6</p>
                                <Icon iconName="Stars" />
                            </div>
                            <p className='text-lightBlack font-manrope font-normal text-xs leading-[19px]'>Based on 145 reviews</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl border-[0.83px] flex items-center gap-1 p-[8px_44px_6px_8px] border-gray max-w-[228px] w-full min-h-[80px]'>
                        <img className='pointer-events-none' src={greenStar} alt="star" />
                        <div className='flex flex-col'>
                            <p className='font-manrope font-normal text-xs text-lightBlack leading-[19px]'>Google Review</p>
                            <div className='flex gap-1 items-center'>
                                <p className='font-manrope font-normal text-xl leading-6 text-lightBlack'>4.6</p>
                                <Icon iconName="Stars" />
                            </div>
                            <p className='text-lightBlack font-manrope font-normal text-xs leading-[19px]'>Based on 145 reviews</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <img className='pointer-events-none' src={certifiedIcon} alt="certification-icon" />
                        <img className='pointer-events-none' src={awardIcon} alt="award-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero