import Image from 'next/image';
import chevron from '../../public/logo/Vector.svg';
import {
	asset,
	company,
	dome,
	human,
	money,
	people,
	triangle,
} from '../../public/images';
import Button from '@/components/button';
import UseParallax from './useParallax';
export default function Home() {
	return (
		<main className='max-w-[1200px] flex flex-col items-center  md:p-10 '>
			<div className='flex flex-col items-center p-5'>
				<p className='dark:text-white text-black font-bold  text-[40px] md:text-8xl text-center mt-10 md:mt-20 leading-[54px] md:leading-[100px] opacity-90'>
					You Have Ideas.
					<br /> We Bring Them to Life.
				</p>
				<p className='dark:text-white text-black mt-5 text-center w-full max-w-[900px] font-normal text-sm opacity-75'>
					We’re a full-cycle consulting and software development company, with
					expert product teams experienced in Finance and Media & Entertainment,
					with a special emphasis on Ticketing.
				</p>
				<div className='flex  bg-black max-w-max rounded-md  h-[36px] md:h-[50px] items-center mt-8 dark:bg-white'>
					<button className='flex px-5  py-3 dark:text-black text-white font-bold text-xs'>
						Learn More{' '}
					</button>
					<div className='flex border-l-2 px-3 md:px-4  py-3 border-gray dark:border-black h-[95%] md:h-full'>
						<Image src={chevron} alt=''></Image>
						<Image src={chevron} alt=''></Image>
					</div>
				</div>
			</div>
			<Image src={company} className='mt-14  md:hidden' alt='' />

			<div className='hidden md:block'>
				<UseParallax>
					<div className=' md:mt-20 relative'>
						<div className=' h-[200px] rounded-[40%] top-[-10px] absolute -inset-2  bg-white opacity-25 blur-3xl'></div>
						<Image src={company} className='mt-14 px-4' alt='' />
					</div>
				</UseParallax>
			</div>
			<div className='w-full mt-5 md:mt-10 p-5'>
				<div className='mb-2 w-fit font-normal text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
					Who Are We{' '}
				</div>
				<p className='dark:text-white text-black text-left text-3xl font-bold md:text-[68px] md:leading-[68px]'>
					Our enthusiasm fuels us, as we transform clients' visionary ideas into
					reality through innovative software, driven by evolving needs.
				</p>
			</div>

			<div className='flex flex-col md:flex-row justify-between md:mt-16 p-5'>
				<div className='w-full md:w-2/6'></div>
				<div className='w-full md:w-4/6'>
					<p className='dark:text-white text-black md:text-2xl mb-3'>
						In the process, we proactively collaborate with clients on their
						design, build-out, and deployment. Our experiences engineers utilize
						our industry knowledge to evaluate, identify and develop innovative
						software solutions.
					</p>
					<p className='dark:text-white text-black md:text-2xl mt-4'>
						With our support as an experienced software development partner, we
						can help you enhance your existing services or introduce new ones
						that can offer your business a competitive edge.
					</p>
					<p className='font-bold md:text-2xl mt-4 dark:text-white text-black'>
						Software development company trusted by startups and Fortune 1000
						companies.
					</p>
				</div>
			</div>

			<div className='bg-grey  md:rounded-3xl mt-10 md:mt-20 w-full '>
				<h3 className='md:pt-20 pt-10 px-7 font-bold text-3xl md:text-5xl text-left md:text-center mb-8 md:mb-16 opacity-90 '>
					Why Companies Work With 9and9
				</h3>
				<div className='flex flex-col md:flex-row p-6  pt-0 pb-12'>
					<div className='w-full md:w-1/2  md:pl-18'>
						<div className=' py-8 pt-0 pl-0 border-b-[0.5px] border-gray'>
							<div className='flex mb-2 items-baseline'>
								<Image className='h-6' src={triangle} alt='' />
								<p className='text-xl md:text-[26px] font-normal ml-1'>
									Full transparency
								</p>
							</div>
							<p className='opacity-70'>
								The whole process is as transparent as possible. We immediately
								establish a roadmap, clear KPIs and conditions for their
								implementation, type of reporting, daily events, sync-ups, and
								product testing conditions.
							</p>
						</div>
						<div className=' py-8 pl-0 border-b-[0.5px] border-gray'>
							<div className='flex mb-2 items-baseline'>
								<Image className='h-6' src={human} alt='' />
								<p className='text-xl md:text-[26px] font-normal ml-1'>
									Client involvement
								</p>
							</div>
							<p className='opacity-70'>
								We determine the degree of Client involvement. We can work on a
								turnkey basis, or we may work with the direct participation of
								the Client’s management — our processes are adapted easily.
							</p>
						</div>
						<div className=' py-8 pl-0 border-b-[0.5px] border-gray'>
							<div className='flex mb-2 items-baseline'>
								<Image className='h-6' src={money} alt='' />
								<p className='text-xl md:text-[26px] font-normal ml-1'>
									{' '}
									Reasonable costs{' '}
								</p>
							</div>
							<p className='opacity-70'>
								We offer fair prices for both parties: you get a well-tested
								application with easily maintainable code, and we get enough
								resources to grow as professionals.
							</p>
						</div>
						<div className=' py-8 pl-0 border-b-[0.5px] border-gray'>
							<div className='flex mb-2 items-baseline'>
								<Image className='h-6' src={asset} alt='' />
								<p className='text-xl md:text-[26px] font-normal ml-1'>
									{' '}
									No language barrier{' '}
								</p>
							</div>
							<p className='opacity-70'>
								There is no language barrier, as our employees speak English —
								at least B1 level for engineers and C1 level for managers.
							</p>
						</div>
						<div className=' py-8 pl-0  border-gray'>
							<div className='flex mb-2 items-baseline'>
								<Image className='h-6' src={dome} alt='' />
								<p className='text-xl md:text-[26px] font-normal ml-1'>
									Effective time difference management{' '}
								</p>
							</div>
							<p className='opacity-70'>
								We adjust the development process and shift our working hours to
								match your working day. It allows us to provide the necessary
								number of hours of overlap.
							</p>
						</div>
					</div>
					<div className='w-full md:w-1/2 md:relative '>
						<Image
							className='md:left-10 w-full md:absolute md:pl-20'
							src={people}
							alt='people'
						/>
					</div>
				</div>
			</div>

			<div className=' w-full flex flex-col md:flex-auto md:flex-row  md:my-16 '>
				<div className='md:h-screen h-auto sticky w-full md:w-1/2 flex flex-col p-6  md:top-28'>
					<h3 className='text-3xl md:text-5xl my-4 dark:text-white text-black'>
						What We Offer
					</h3>
					<p className='text-md md:text-2xl dark:text-white text-black'>
						Our high-performaing services help businesses embrace innovation and
						tackle the challenges of today’s digital world. Based on your
						strategic goals, our services capture and deliver business value in
						a cost-effective way.
					</p>
					<Button label='View All Services' />
				</div>
				<div className='w-full overflow-y-auto max-w-[100vw] flex justify-between md:w-1/2 p-6 md:block'>
					<div className='bg-gray mr-6 md:mr-0 min-w-[90%]  p-5 md:p-16 rounded-xl  md:mb-10'>
						<h2>Consulting</h2>
						<p>
							Work closely with our business consultants, who are on top of the
							latest tech and industry trends. We can help you develop a
							technology strategy and propel your business towards digital
							transformation no matter what your goal is.
						</p>
					</div>
					<div className='bg-gray  mr-6 md:mx-0 min-w-[90%] p-5 md:p-16 rounded-xl  md:mb-10'>
						<h2>Idea/Discovery Phase</h2>
						<p>
							Work closely with our business consultants, who are on top of the
							latest tech and industry trends. We can help you develop a
							technology strategy and propel your business towards digital
							transformation no matter what your goal is.
						</p>
					</div>
					<div className='bg-gray   md:mx-0 min-w-[90%] p-5 md:p-16 rounded-xl  md:mb-10'>
						<h2>Testing Phase</h2>
						<p>
							Work closely with our business consultants, who are on top of the
							latest tech and industry trends. We can help you develop a
							technology strategy and propel your business towards digital
							transformation no matter what your goal is.
						</p>
					</div>
					<div className='bg-gray  ml-6 md:ml-0 min-w-[90%]  p-5 md:p-16 rounded-xl  md:mb-10'>
						<h2>Consulting</h2>
						<p>
							Work closely with our business consultants, who are on top of the
							latest tech and industry trends. We can help you develop a
							technology strategy and propel your business towards digital
							transformation no matter what your goal is.
						</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col mt-0 md:mt-10 w-full border-gray border-b-[1px] p-6'>
				<p className='text-5xl border-gray border-b-[1px] dark:text-white text-black  pb-6'>
					People have infinite ideas,{' '}
					<span className='mb-2 w-fit font-normal text-transparent  bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
						we give them life!{' '}
					</span>
				</p>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mt-8 md:my-16 '>
					<div>
						<h3 className='text-5xl md:text-8xl md:text-center dark:text-white text-black'>
							20+
						</h3>
						<p className='mb-2 w-full text-left md:text-center text-xl font-normal text-transparent  bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
							Years of Experience
						</p>
					</div>
					<div>
						<h3 className='text-5xl md:text-8xl md:text-center dark:text-white text-black'>
							100+
						</h3>
						<p className='mb-2 w-full text-left md:text-center text-xl font-normal text-transparent  bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
							Employee
						</p>
					</div>
					<div>
						<h3 className='text-5xl md:text-8xl md:text-center dark:text-white text-black'>
							1000+
						</h3>
						<p className='mb-2 w-full text-left md:text-center text-xl font-normal text-transparent  bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
							Successful Project Launches
						</p>
					</div>
					<div>
						<h3 className='text-5xl md:text-8xl md:text-center dark:text-white text-black'>
							30+
						</h3>
						<p className='mb-2 w-full text-left md:text-center text-xl font-normal text-transparent  bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
							Successful Project Launches
						</p>
					</div>
				</div>
			</div>

			<div className='p-4 my-4 md:my-8 w-fit font-semibold text-3xl md:text-6xl text-center md:leading-[68px] dark:text-white text-black'>
				Want to know how our experts can help your project development?
			</div>
			<div className='flex mb-14 md:my-8 bg-black max-w-max rounded-md  h-[50px] items-center md:mt-8  dark:bg-white'>
				<button className='flex px-5  py-3  font-bold text-sm dark:text-black text-white'>
					Contact Us
				</button>
				<div className='flex border-l-2 px-4  py-3 border-white dark:border-black h-full'>
					<Image src={chevron} alt=''></Image>
					<Image src={chevron} alt=''></Image>
				</div>
			</div>
		</main>
	);
}
