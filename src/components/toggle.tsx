'use client';
import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { moon, sun } from '../../public/images';
import Image from 'next/image';

const Toggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<button
			className={`bg-black border-gray border-[1px]  dark:border-[#606060] rounded-2xl dark:bg-header flex w-[64px] justify-between p-1  relative`}
			onClick={() => {
				if (theme == 'dark') {
					setTheme('light');
				} else {
					setTheme('dark');
				}
			}}
		>
			{' '}
			<Image src={moon} className='z-9' alt='' height={24} />
			<div
				className={`transition-all transform duration-300  ${
					theme === 'dark' ? 'ml-[29px]' : 'ml-0'
				}    z-10 shadow-lg border-[#dcdcdc] border-[1px] absolute bg-white w-[25px] h-[25px] rounded-xl top-[3px]`}
			></div>
			<Image src={sun} alt='' className='z-9' height={24} />
		</button>
	);
};

export default Toggle;
