import React from 'react';
import Button from './button';
import Image from 'next/image';
import { NineandNine, socials } from '../../public/images';

const Footer = () => {
	return (
		<div className='flex flex-col w-full items-center  bg-footer dark:bg-black relative mt-32'>
			<div className='flex w-[90%] py-6  bg-gradient-to-r from-blue via-purple to-pink rounded-xl items-center absolute top-[-20%]'>
				<div className='w-1/2 text-3xl px-12 '>
					+91-40-64540048, +91-99128 91000
				</div>
				<div className=' w-1/2 flex px-12 items-center justify-center'>
					<div className='text-xl pr-10'>Join Mailing List</div>
					<Button label='Get Started' />
				</div>
			</div>
			<div className='pt-28 flex  border-b-[2px] border-border w-[90%] py-12 gap-10 text-black dark:text-white'>
				<div className='px-10 w-1/5'>
					<Image
						src={NineandNine}
						alt=''
						height={35}
						className='invert-[80%] dark:invert-0'
					/>
				</div>
				<div className='w-1/5'>
					<h2 className='text-lg pb-2 text-bold'>Use Cases</h2>
					<ul>
						<li className='opacity-70 py-[6px]'>Web-designers</li>
						<li className='opacity-70 py-[6px]'>Marketers</li>
						<li className='opacity-70 py-[6px]'>Small Business</li>
						<li className='opacity-70 py-[6px]'>Website Builder</li>
					</ul>
				</div>
				<div className='w-1/5'>
					<h2 className='text-lg pb-2 text-bold'>Company</h2>
					<ul>
						<li className='opacity-70 py-[6px]'>About Us</li>
						<li className='opacity-70 py-[6px]'>Careers</li>
						<li className='opacity-70 py-[6px]'>FAQs</li>
						<li className='opacity-70 py-[6px]'>Teams</li>{' '}
						<li className='opacity-70 py-[6px]'>Contact Us</li>
					</ul>
				</div>
				<div className='w-2/5'>
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
			<div className=' flex justify-between    py-4 w-[90%] '>
				<div className='flex dark:text-white text-black'>
					<div className='text-sm  px-2'>Privacy Policy</div>
					<div className='text-sm  px-2'>Terms of Use</div>
					<div className='text-sm  px-2'>Sales and Refunds</div>
					<div className='text-sm  px-2'>Legal</div>
					<div className='text-sm  px-2'>Site Map</div>
				</div>
				<div className='dark:text-white text-black'>
					© 2024 9and9. All Rights Reserved.
				</div>
			</div>
		</div>
	);
};

export default Footer;
