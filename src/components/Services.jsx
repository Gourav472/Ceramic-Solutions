import React, { useState, useEffect, useCallback } from 'react';
import CommonHeading from '../common/CommonHeading';
import Icon from '../common/Icons';
import { LOCATION_MARK } from "../common/Helper";

const createColumns = (data, isMobile) => {
    const FirstColumn = data.filter((_, index) => index % 3 === 0);
    const SecondColumn = data.filter((_, index) => index % 3 === 1);
    const LastColumn = data.filter((_, index) => index % 3 === 2);
    const RepeatedFirstColumn = Array.from({ length: 7 }, () => FirstColumn).flat();
    const RepeatedSecondColumn = Array.from({ length: 7 }, () => SecondColumn).flat();
    const RepeatCount = isMobile ? 5 : 6;
    const RepeatedLastColumn = Array.from({ length: RepeatCount }, () => LastColumn).flat();
    const CombinedColumns = [];
    const MaxLength = Math.max(RepeatedFirstColumn.length, RepeatedSecondColumn.length, RepeatedLastColumn.length);
    for (let i = 0; i < MaxLength; i++) {
        if (i < RepeatedFirstColumn.length) CombinedColumns.push(RepeatedFirstColumn[i]);
        if (i < RepeatedSecondColumn.length) CombinedColumns.push(RepeatedSecondColumn[i]);
        if (i < RepeatedLastColumn.length) CombinedColumns.push(RepeatedLastColumn[i]);
    }
    return CombinedColumns;
};
const Services = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth < 640);
    }, []);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    const columns = createColumns(LOCATION_MARK, isMobile);
    return (
        <div className='xl:pt-20 pt-px pb-14'>
            <div className="container mt-1">
                <div className="flex flex-col items-start max-w-[589px] w-full">
                    <CommonHeading HeadingName="Frequently Asked Questions" HeadingClass="text-start" />
                    <p className='font-jakarta text-left font-normal text-lg text-black mt-5'>
                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
                    </p>
                </div>
                <div className="pt-8 flex justify-center">
                    <div className="flex flex-wrap flex-row -mx-3 w-full sm:gap-0 gap-5 justify-center">
                        {columns.map((location, index) => (
                            <div key={index} className="sm:w-1/2 sm:max-w-full w-full max-w-[161px] lg:w-4/12 sm:px-3 -mt-1 sm:mt-6">
                                <div className="shadow-4xl p-3 sm:p-6 rounded-3xl w-full bg-white flex items-center gap-3">
                                    <Icon iconName="LocationMark" className="py-[10.5px] px-3 bg-red rounded-full" />
                                    <p className='font-jakarta font-semibold text-lg sm:text-2xl text-black'>
                                        {isMobile ? "Knoxville" : location.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
