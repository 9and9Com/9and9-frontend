import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../public/logo/logo.svg';
const Header = () => {
	const [visible, setVisible] = useState(false);
	const menu = [
		{ title: 'Who We Are?' },
		{ title: 'What We Do?' },
		{ title: 'Why US!' },
		{ title: 'Contact Us' },
	];
	useEffect(() => {
		console.log(visible);
	}, [visible]);
	return (
		<div className='w-full top-5 max-w-[900px]  sticky z-10 px-4 md:px-8'>
			<div className=' h-[120px] top-1 w-[70%] m-auto absolute -inset-2 rounded-lg bg-gradient-to-b from-blue  to-violet-900 opacity-35 blur-3xl z-[-1]'></div>
			<div className='relative h-[70px]  w-full  bg-header border-border border-[0.2px] top-5 px-5 py-3 flex justify-between rounded-md items-center '>
				<div className='flex'>
					<div
						className='flex flex-col mr-4 md:hidden cursor-pointer'
						onClick={() => {
							setVisible((prev) => !prev);
						}}
					>
						<div className='w-6 bg-white h-[2px] mb-[6px]'></div>
						<div className='w-6 bg-white h-[2px] mb-[6px]'></div>
						<div className='w-6 bg-white h-[2px] '></div>
					</div>
					<Image
						onClick={() => {
							console.log('9and9');
						}}
						src={logo}
						alt={''}
						className='w-24'
					></Image>
				</div>
				<div className='hidden md:flex'>
					{menu.map((item) => {
						return (
							<div
								key={item.title}
								className='text-sm mx-3 opacity-75 hover:opacity-100'
								onClick={() => {
									console.log(item.title);
								}}
							>
								{item.title}
							</div>
						);
					})}
				</div>
				<button className='bg-white text-black px-3 md:px-5 py-2 md:py-3 rounded-md text-xs md:text-md font-semibold'>
					Get In Touch
				</button>
				<div
					className={`transition-all transform duration-600 absolute rounded-b-lg ${
						visible ? 'h-[180px] ' : 'h-0'
					} bg-header overflow-hidden flex-col w-full left-0 top-[70px]`}
				>
					{menu.map((item) => {
						return (
							<div
								key={item.title}
								className='py-3 text-sm px-3 opacity-75 hover:opacity-100 hover:bg-black'
							>
								{item.title}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Header;
