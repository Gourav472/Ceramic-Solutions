import React from 'react'
import Header from './Header'

const Hero = () => {
    return (
        <div className=' bg-hero_bg bg-cover pt-6 bg-no-repeat min-h-screen'>
            <div className=' container'>
                <Header />
                <div className=' flex flex-col pt-[79px]'>
                    <h1 className=' max-w-[830px] text-white font-jakarta font-semibold text-[64px] leading-[80px]'>Transform Your Space with Precision and Quality: <span className=' block'>Get a Free Quote Today!</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Hero