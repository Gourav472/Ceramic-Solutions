import React, { useState, useEffect } from 'react';
import CommonHeading from '../common/CommonHeading';
import Icon from '../common/Icons';
import { LOCATION_MARK } from "../common/Helper";

const createColumns = (data) => {
    const firstColumn = data.filter((_, index) => index % 3 === 0);
    const secondColumn = data.filter((_, index) => index % 3 === 1);
    const lastColumn = data.filter((_, index) => index % 3 === 2);

    const repeatedFirstColumn = Array.from({ length: 7 }, () => firstColumn).flat();
    const repeatedSecondColumn = Array.from({ length: 7 }, () => secondColumn).flat();
    const repeatedLastColumn = Array.from({ length: 6 }, () => lastColumn).flat();

    const combinedColumns = [];
    const maxLength = Math.max(repeatedFirstColumn.length, repeatedSecondColumn.length, repeatedLastColumn.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < repeatedFirstColumn.length) combinedColumns.push(repeatedFirstColumn[i]);
        if (i < repeatedSecondColumn.length) combinedColumns.push(repeatedSecondColumn[i]);
        if (i < repeatedLastColumn.length) combinedColumns.push(repeatedLastColumn[i]);
    }

    return combinedColumns;
};

const Services = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const columns = createColumns(LOCATION_MARK);

    return (
        <div className='pt-20'>
            <div className="container mt-1">
                <div className="flex flex-col items-start max-w-[589px] w-full">
                    <CommonHeading HeadingName="Frequently Asked Questions" HeadingClass="text-start" />
                    <p className='font-jakarta text-left font-normal text-lg text-black mt-5'>
                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
                    </p>
                </div>
                <div className="pt-8 flex justify-center">
                    <div className="flex flex-wrap flex-row -mx-3 w-full justify-center">
                        {columns.map((location, index) => (
                            <div key={index} className="w-full sm:w-4/12 px-3 mt-6">
                                <div className="shadow-gray p-6 rounded-3xl w-full bg-white flex items-center gap-3">
                                    <Icon iconName="LocationMark" className="py-[10.5px] px-3 bg-red rounded-full" />
                                    <p className='font-jakarta font-semibold text-base sm:text-2xl text-black'>
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
