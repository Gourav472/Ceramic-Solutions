import React, { useEffect, useState } from 'react';
import ceramicLogo from '../assets/images/svg/ceramic_logo.svg'
const PreLoader = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        const timer = setTimeout(() => {
            setVisible(false);
            document.body.classList.remove('overflow-hidden');
        }, 2000);
        return () => {
            clearTimeout(timer);
            document.body.classList.remove('overflow-hidden');
        }
    }, []);
    if (!visible) return null;
    return (
        <div className='min-h-screen w-full bg-white z-30 fixed top-0 left-0 grid place-items-center'>
            <div className='animate-pulse flex items-end gap-10'>
                <img className='max-sm:w-[200px] sm:w-[250px] ' src={ceramicLogo} alt="ceramic-logo" />
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <div className="max-sm:h-16 max-sm:w-16 sm:h-20 sm:w-20 rounded-full border-t-8 border-b-8 border-black"></div>
                        <div className="absolute top-0 left-0 max-sm:h-16 max-sm:w-16 sm:h-20 sm:w-20 rounded-full border-t-8 border-b-8 border-red animate-spin">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PreLoader;