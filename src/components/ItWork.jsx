import React from 'react'
import itWorkImg from '../assets/images/webp/itwork_img.webp'
import CommonHeading from '../common/CommonHeading'
import Icon from '../common/Icons'
import CommonBtn from '../common/CommonBtn'
const ItWork = () => {
    return (
        <div className='lg:pb-[140px] md:pb-24 pb-20 container'>
            <div className="flex lg:flex-row flex-col xl:gap-[63px] max-lg:items-center gap-10">
                <div className='xl:max-w-[485px] lg:order-1 order-2 lg:max-w-[460px] max-w-[400px] max-lg:mx-auto w-full sm:flex hidden lg:justify-end justify-center relative lg:pb-0 pb-14'>
                    <img className='xl:max-w-[435px] lg:max-w-[400px] max-w-[280px] z-10 w-full lg:min-h-[581px] min-h-[270px]' src={itWorkImg} alt="#" />
                    <div className='lg:max-w-[300px] max-w-[250px] w-full lg:min-h-[396px] min-h-[270px] absolute lg:left-0 left-[0%] xl:bottom-[9%] lg:bottom-[12%] bottom-[0%] rounded-3xl bg-red'></div>
                </div>
                <div className='max-w-[592px] w-full lg:order-2 order-1'>
                    <CommonHeading HeadingName="How it works?" HeadingClass="text-start" />
                    <p className='max-w-[592px] text-black font-normal sm:text-lg text-base sm:leading-7 leading-6 font-jakarta sm:pt-5 pt-4'>
                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt.
                    </p>
                    <div className='max-w-[592px] w-full xl:h-[128px] rounded-3xl bg-white p-4 shadow-5xl mt-8'>
                        <div className='flex gap-5'>
                            <Icon iconName="CheckIcon" />
                            <div className='flex flex-col gap-3'>
                                <p className='text-black font-semibold text-xl leading-8 font-jakarta'>
                                    Contact us
                                </p>
                                <p className='max-w-[508px] font-jakarta font-normal sm:text-base text-sm sm:leading-6 leading-[22.4px] text-black'>
                                    Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[592px] w-full xl:h-[128px] rounded-3xl bg-white p-4 shadow-5xl mt-4'>
                        <div className='flex gap-5'>
                            <Icon iconName="CheckIcon" />
                            <div className='flex flex-col gap-3'>
                                <p className='text-black font-semibold text-xl leading-8 font-jakarta'>
                                    Get a Qoute
                                </p>
                                <p className='max-w-[508px] font-jakarta font-normal sm:text-base text-sm sm:leading-6 leading-[22.4px] text-black'>
                                    Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[592px] w-full xl:h-[128px] rounded-3xl bg-white p-4 shadow-5xl mt-4'>
                        <div className='flex gap-5'>
                            <Icon iconName="CheckIcon" />
                            <div className='flex flex-col gap-3'>
                                <p className='text-black font-semibold text-xl leading-8 font-jakarta'>
                                    Get your Work Done
                                </p>
                                <p className='max-w-[508px] font-jakarta font-normal sm:text-base text-sm sm:leading-6 leading-[22.4px] text-black'>
                                    Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex sm:gap-6 gap-[6px] md:pt-9 sm:pt-7 pt-6'>
                        <CommonBtn ButtonName='Get a Quote' ButtonClass='text-white bg-red max-sm:text-base sm:max-w-[173px] max-sm:px[23px] max-w-[143px] w-full sm:h-[63px] h-[60px]' />
                        <CommonBtn ButtonName='View Tile Visualizer' ButtonClass='text-red max-sm:text-base max-sm:px[23px] bg-white sm:max-w-[228px] lg:px-[30px] max-w-[194px] w-full sm:h-[63px] h-[60px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItWork
