import React from 'react';
import Image from 'next/image';
import chevron from '../../public/logo/Vector.svg';
const Button = ({ label }: { label: string }) => {
	return (
		<div className='flex my-8 bg-white max-w-max rounded-md  h-[50px] items-center mt-8 '>
			<button className='flex px-5  py-3 text-black font-bold text-md'>
				{label}
			</button>
			<div className='flex border-l-2 px-4  py-3 border-black h-full'>
				<Image src={chevron} alt=''></Image>
				<Image src={chevron} alt=''></Image>
			</div>
		</div>
	);
};

export default Button;
