import Image from 'next/image';
import React from 'react';
import sampleImage from '../public/12.jpg';

const SmallCard = () => {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
            <div className="relative h-16 w-16">
                <Image src={sampleImage} layout='fill' className='rounded-lg' alt='imagesix'  />
            </div>

            <div>
                <h2 className='font-semibold'>London</h2>
                <p>45 minute drive</p>
            </div>
        </div>
    );
};

export default SmallCard;