import React, { useState } from 'react';
import { FOOTER_DATA, SOCIAL_ICONS, FOOTER_HEADING } from '../common/Helper';
import ceramicLogo from "../assets/images/svg/ceramic_logo.svg";
import CommonBtn from '../common/CommonBtn';
import Icon from '../common/Icons';

const Footer = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const CURRENT_YEAR = new Date().getFullYear();
    const HANDLE_SUBMIT = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => {
            setIsSubmitted(false);
        }, 1500);
    };

    return (
        <div className='xl:pt-16 pt-6 pb-4 relative'>
            <div className="container flex justify-center pb-11">
                <div className="flex flex-wrap flex-row justify-between -mx-3 w-full">
                    <div className="lg:max-w-[250px] w-full">
                        <img src={ceramicLogo} alt="ceramicLogo" className='max-w-[175px] w-full' />
                        <a href="mailto:help@Dealzip.com" className='font-jakarta custom_duration hover:text-red font-normal text-base flex items-center gap-2.5 mt-5 capitalize text-primaryBlack'><Icon iconName="Email" /> help@Dealzip.com</a>
                        <a href="tel:+123445667889" className='font-jakarta font-normal custom_duration hover:text-red text-base flex items-center gap-2.5 mt-4 capitalize text-primaryBlack'><Icon iconName="Phone_Red" />+1 234 456 678 89</a>
                        <div className="mt-6 flex items-center gap-2">
                            {SOCIAL_ICONS.map((index) => (
                                <a key={index.link} href={index.link} target='_blank' rel="noreferrer" className='ease-linear duration-300 hover:shadow-[0px_0px_10px_red] rounded-full'><Icon iconName={index.icon} /></a>
                            ))}
                        </div>
                    </div>
                    {FOOTER_DATA.map((index) => (
                        <div key={index.heading} className="max-w-[105px] w-full px-1 text-nowrap md:w-fit mt-6 lg:mt-0">
                            <p className='font-jakarta font-semibold text-xl capitalize text-primaryBlack'>{index.heading}</p>
                            <div className="flex flex-col items-start gap-3 mt-4">
                                {index.link.map((i) => (
                                    <a key={i.id} href="#hlo" className='font-jakarta custom_duration hover:text-red font-normal text-base capitalize text-primaryBlack'>{i.text}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="lg:w-4/12 md:w-1/2 w-full px-3 mt-6 lg:mt-0">
                        <p className='font-jakarta font-semibold text-xl capitalize text-primaryBlack'>Newsletter</p>
                        <div className="flex flex-col items-start gap-3 mt-4">
                            <a href="#hlo" className='font-jakarta font-normal custom_duration hover:text-red text-base hidden md:flex capitalize text-primaryBlack'>Stay up to date</a>
                        </div>
                        <form onSubmit={HANDLE_SUBMIT} className='flex items-center max-w-[340px] w-full mt-3 justify-between rounded-[62px] border-[#00000026] border-[1px] p-2.5'>
                            <input
                                type="email"
                                placeholder='Your email'
                                className='w-7/12 pl-3 outline-none h-[55px] pe-1'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <CommonBtn ButtonName="Subscribe" ButtonClass="bg-red text-white px-10 border-2 sm:py-3 hover:bg-white hover:text-red h-[55px]" />
                        </form>
                        {isSubmitted && (
                            <div className=" absolute right-[3%] py-5 shadow-4xl justify-center max-w-[400px] rounded-3xl w-1/2 bg-white flex items-center custom_duration border-b-2 lg:bottom-[20%] bottom-[5%] md:bottom-[9%] border-offRed cursor-pointer">
                                <p className='font-jakarta font-normal text-green-600'>Submit successfully</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <span className='flex w-full h-0.5 mb-4 bg-[linear-gradient(90deg,_rgba(22,_22,_22,_0)_0%,_#696969_51.56%,_rgba(22,_22,_22,_0)_100%)]'></span>
            <p className='text-center cursor-pointer font-jakarta font-normal mx-4 px-8 md:text-base text-sm capitalize text-primaryBlack'>Copyright {CURRENT_YEAR} ceramicsolutions.com all rights reserved</p>
        </div>
    );
}

export default Footer;
