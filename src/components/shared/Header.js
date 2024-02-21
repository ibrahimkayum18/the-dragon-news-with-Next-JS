"use client"

import React from 'react';
import dragon from "@/assets/The Dragon News.png"
import Image from 'next/image';
import { Typography } from '@mui/material';
import { GetCurrentDate } from '@/utils/GetCurrentDate';

const Header = () => {
    const currentDate = GetCurrentDate()
    return (
        <div className='my-8'>
            <Image className='mx-auto' src={dragon} width={500} height={500} alt="news" />
            <Typography className='text-gray-700 text-center font-semibold hover:underline hover:text-blue-800'>
                Journalism Withought Fear or Favour
            </Typography>
            <Typography className=' text-center text-2xl text-gray-500 hover:underline hover:text-blue-800'>
                {currentDate}
            </Typography>

        </div>
    );
};

export default Header;