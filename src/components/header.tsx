import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo/logo.svg';
const Header = () => {
	return (
		<div className='w-full top-5 max-w-[900px]  sticky z-10 '>
			<div className=' h-[120px] top-1 w-[70%] m-auto absolute -inset-2 rounded-lg bg-gradient-to-b from-blue  to-violet-900 opacity-35 blur-3xl'></div>
			<div className=' h-[70px]  w-full  bg-header border-border border-[0.2px] top-5 px-5 py-3 flex justify-between rounded-md items-center opacity-85 '>
				<div className='absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-800 shadow-large'></div>
				<Image src={logo} alt={''}></Image>
				<div className='flex '>
					<div className='text-sm mx-3 opacity-75 hover:opacity-100'>
						Who We Are?
					</div>
					<div className='text-sm mx-3 opacity-75 hover:opacity-100'>
						What We Do?
					</div>
					<div className='text-sm mx-3 opacity-75 hover:opacity-100'>
						Why US!
					</div>
					<div className='text-sm mx-3 opacity-75 hover:opacity-100'>
						Contact
					</div>
				</div>
				<button className='bg-white text-black px-5 py-3 rounded-md text-md font-semibold'>
					Get In Touch
				</button>
			</div>
		</div>
	);
};

export default Header;
