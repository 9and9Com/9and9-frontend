import React from 'react';
import Button from './button';
import Image from 'next/image';
import { NineandNine, socials } from '../../public/images';

const Footer = () => {
	return (
		<div className='flex flex-col w-full items-center  bg-footer dark:bg-black relative lg:mt-38 md:mt-20'>
			<div className='flex justify-between flex-col lg:flex-row w-[90%] py-5  bg-gradient-to-r from-blue via-purple to-pink rounded-xl items-center absolute top-[-15%]'>
				<div className=' text-2xl text-center mt-5 lg:text-[24px] xl:text-[28px] px-12 '>
					+91-40-64540048, +91-99128 91000
				</div>
				<div className=' flex flex-col mt-6 md:mt-0 md:flex-row pl-8 px-12 items-center justify-center'>
					<div className='text-xl md:pr-8 text-center '>Join Mailing List</div>
					<Button label='Get Started' />
				</div>
			</div>
			<div className=' py-12 mt-28 flex px-6 flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row  border-b-[2px] border-border w-[90%]  gap-6 md:gap-10 text-black dark:text-white'>
				<div className='  lg:w-1/5 '>
					<Image
						src={NineandNine}
						alt=''
						className=' invert-[80%] dark:invert-0'
					/>
				</div>
				<div className='w-full lg:w-1/5'>
					<h2 className='text-lg pb-0 md:pb-2 text-bold '>Use Cases</h2>
					<ul className='text-textblack dark:text-textgray flex md:block gap-4'>
						<li className='opacity-70 text-sm py-[6px]'>Web-designers</li>
						<li className='opacity-70 text-sm py-[6px]'>Marketers</li>
						<li className='opacity-70 text-sm py-[6px]'>Small Business</li>
						<li className='opacity-70 text-sm py-[6px]'>Website Builder</li>
					</ul>
				</div>
				<div className='w-full lg:w-1/5 '>
					<h2 className='text-lg pb-0 md:pb-2 text-bold'>Company</h2>
					<ul className='text-textblack dark:text-textgray flex md:block gap-4'>
						<li className='opacity-70 text-sm py-[6px]'>About Us</li>
						<li className='opacity-70 text-sm py-[6px]'>Careers</li>
						<li className='opacity-70 text-sm py-[6px]'>FAQs</li>
						<li className='opacity-70 text-sm py-[6px]'>Teams</li>{' '}
						<li className='opacity-70 text-sm py-[6px]'>Contact Us</li>
					</ul>
				</div>
				<div className='w-full  lg:w-2/5'>
					<h2 className='text-lg'>Lets Do it!</h2>
					<Image
						src={socials}
						alt=''
						className='py-3 mb-2 md:mb-8 invert-[80%] dark:invert-0'
					/>

					<h2 className='text-lg text-black dark:text-white'>Subscribe</h2>
					<p className='opacity-70 text-lg py-[6px] text-black dark:text-white'>
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
