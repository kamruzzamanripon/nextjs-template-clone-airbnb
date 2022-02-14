import Image from 'next/image';
import React from 'react';
import sampleImage from '../public/9.jpg';

const LargeCard = () => {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={sampleImage} layout='fill' objectFit='cover' className='rounded-2xl' />
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className="text-4xl mb-3 w-64 text-white">Unique stays</h3>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="text-sm text-white bg-gray-600 px-4 py-2 rounded-lg mt-5">Get Inspired</button>
            </div>
        </section>
    );
};

export default LargeCard;