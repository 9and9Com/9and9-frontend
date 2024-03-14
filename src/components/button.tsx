import React from 'react';
import Image from 'next/image';
import chevron from '../../public/logo/Vector.svg';
const Button = ({ label }: { label: string }) => {
	return (
		<div className='flex my-4 dark:bg-white  bg-black md:my-8 max-w-max rounded-md  h-[50px] items-center mt-4 md:mt-8 '>
			<button className='flex px-5  py-3  text-white dark:text-black font-bold  text-md'>
				{label}
			</button>
			<div className='flex border-l-2 px-4  py-3 border-white dark:border-black h-full'>
				<Image src={chevron} alt=''></Image>
				<Image src={chevron} alt=''></Image>
			</div>
		</div>
	);
};

export default Button;
