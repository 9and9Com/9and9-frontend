import React from 'react';
import Button from './button';
import Image from 'next/image';
import { NineandNine, socials } from '../../public/images';

const Footer = () => {
	return (
		<div className='flex flex-col w-full items-center  bg-footer dark:bg-black relative mt-48 md:mt-32'>
			<div className='flex  flex-col lg:flex-row w-[90%] py-6  bg-gradient-to-r from-blue via-purple to-pink rounded-xl items-center absolute top-[-20%]'>
				<div className='w-full md:w-1/2 text-2xl text-center md:text-3xl px-6 md:px-12 '>
					+91-40-64540048, +91-99128 91000
				</div>
				<div className='w-full md:w-1/2 flex flex-col mt-6 md:mt-0 md:flex-row px-12 items-center justify-center'>
					<div className='text-xl md:pr-10 text-center '>Join Mailing List</div>
					<Button label='Get Started' />
				</div>
			</div>
			<div className=' py-12 mt-28 flex px-2 md:px-0 flex-col  md:flex-row  border-b-[2px] border-border w-[90%]  gap-10 text-black dark:text-white'>
				<div className='md:px-10 w-full md:w-1/5 flex justify-start'>
					<Image
						src={NineandNine}
						alt=''
						className=' md:h-16 invert-[80%] dark:invert-0'
					/>
				</div>
				<div className='w-1/2 md:w-1/5'>
					<h2 className='text-lg pb-2 text-bold'>Use Cases</h2>
					<ul>
						<li className='opacity-70 py-[6px]'>Web-designers</li>
						<li className='opacity-70 py-[6px]'>Marketers</li>
						<li className='opacity-70 py-[6px]'>Small Business</li>
						<li className='opacity-70 py-[6px]'>Website Builder</li>
					</ul>
				</div>
				<div className='w-1/2 md:w-1/5'>
					<h2 className='text-lg pb-2 text-bold'>Company</h2>
					<ul>
						<li className='opacity-70 py-[6px]'>About Us</li>
						<li className='opacity-70 py-[6px]'>Careers</li>
						<li className='opacity-70 py-[6px]'>FAQs</li>
						<li className='opacity-70 py-[6px]'>Teams</li>{' '}
						<li className='opacity-70 py-[6px]'>Contact Us</li>
					</ul>
				</div>
				<div className='w-full md:w-2/5'>
					<h2 className='text-lg'>Lets Do it!</h2>
					<Image
						src={socials}
						alt=''
						className='py-6 invert-[80%] dark:invert-0'
					/>

					<h2 className='text-lg text-black dark:text-white'>Subscribe</h2>
					<p className='opacity-70 py-[6px] text-black dark:text-white'>
						Join our mailing list and stay updated on Integrated Insights of
						9and9
					</p>
					<div className='mt-5 rounded-md flex'>
						<input
							className='rounded-l-lg border-none outline-none  text-sm h-9 px-4 '
							placeholder='Enter your email Address'
						/>{' '}
						<button className='text-white rounded-r-lg p-2 bg-gradient-to-r from-blue via-purple to-pink text-sm h-9'>
							Subscribe
						</button>
					</div>
				</div>
			</div>
			<div className=' flex flex-col  md:flex-row justify-between    py-4 w-[90%] '>
				<div className='flex flex-wrap justify-center dark:text-white opacity-80 text-black'>
					<div className='text-sm  px-2'>Privacy Policy</div>
					<div className='text-sm  px-2'>Terms of Use</div>{' '}
					<div className='text-sm  px-2'>Legal</div>
					<div className='text-sm  px-2'>Sales and Refunds</div>
					<div className='text-sm  px-2'>Site Map</div>
				</div>
				<div className='dark:text-white text-black text-center text-sm  mt-4 md:mt-0 md:text-right opacity-80'>
					© 2024 9and9. All Rights Reserved.
				</div>
			</div>
		</div>
	);
};

export default Footer;
