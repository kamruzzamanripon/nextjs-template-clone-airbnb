import Image from 'next/image';
import React from 'react';
import sampleImage from '../public/11.jpg';

const MediumCard = () => {
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
           <div className='relative h-80 w-80'>
               <Image src={sampleImage} layout='fill' className='rounded-xl' alt='imagenine' />
           </div>
           <h3 className='text-2xl mt-3'>Outdoor getaways</h3>
        </div>
    );
};

export default MediumCard;