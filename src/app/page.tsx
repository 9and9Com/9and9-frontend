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
export default function Home() {
	return (
		<main className='max-w-[1200px] flex flex-col items-center'>
			<div className='flex flex-col items-center'>
				<p className='font-bold text-8xl text-center mt-20 leading-[100px] opacity-90'>
					You Have Ideas.
					<br /> We Bring Them to Life.
				</p>
				<p className='mt-5 text-center w-full max-w-[900px] font-normal text-xl opacity-75'>
					We’re a full-cycle consulting and software development company, with
					expert product teams experienced in Finance and Media & Entertainment,
					with a special emphasis on Ticketing.
				</p>
				<div className='flex  bg-white max-w-max rounded-md  h-[50px] items-center mt-8 '>
					<button className='flex px-5  py-3 text-black font-bold text-sm'>
						Learn More{' '}
					</button>
					<div className='flex border-l-2 px-4  py-3 border-black h-full'>
						<Image src={chevron} alt=''></Image>
						<Image src={chevron} alt=''></Image>
					</div>
				</div>
			</div>
			<div className='mt-20 relative'>
				<div className=' h-[200px] rounded-[40%] top-[-10px] absolute -inset-2  bg-white opacity-25 blur-3xl'></div>
				<Image src={company} className='mt-14 px-5' alt='' />
			</div>
			<div className='w-full mt-10 p-5'>
				<div className='mb-2 w-fit font-normal text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
					Who Are We{' '}
				</div>
				<p className='text-left text-[68px] leading-[68px]'>
					Our enthusiasm fuels us, as we transform clients' visionary ideas into
					reality through innovative software, driven by evolving needs.
				</p>
			</div>
			<div className='flex justify-between mt-16'>
				<div className='w-2/6'></div>
				<div className='w-4/6'>
					<p className='text-2xl mb-3'>
						In the process, we proactively collaborate with clients on their
						design, build-out, and deployment. Our experiences engineers utilize
						our industry knowledge to evaluate, identify and develop innovative
						software solutions.
					</p>
					<p className='text-2xl mt-4'>
						With our support as an experienced software development partner, we
						can help you enhance your existing services or introduce new ones
						that can offer your business a competitive edge.
					</p>
					<p className='font-bold text-2xl mt-4'>
						Software development company trusted by startups and Fortune 1000
						companies.
					</p>
				</div>
			</div>
			<div className='bg-grey  rounded-3xl mt-20 '>
				<h3 className='pt-20 font-bold text-5xl text-center mb-16 opacity-90'>
					Why Companies Work With 9and9
				</h3>
				<div className='flex  pt-0 pb-12'>
					<div className='w-1/2  pl-20'>
						<div className=' py-8 pt-0 pl-0 border-b-[0.5px] border-gray'>
							<div className='flex mb-2'>
								<Image src={triangle} alt='' />
								<p className='text-[26px] font-normal ml-3'>
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
							<div className='flex mb-2'>
								<Image src={human} alt='' />
								<p className='text-[26px] font-normal ml-3'>
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
							<div className='flex mb-2'>
								<Image src={money} alt='' />
								<p className='text-[26px] font-normal ml-3'>
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
							<div className='flex mb-2'>
								<Image src={asset} alt='' />
								<p className='text-[26px] font-normal ml-3'>
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
							<div className='flex mb-2'>
								<Image src={dome} alt='' />
								<p className='text-[26px] font-normal ml-3'>
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
					<div className='w-1/2 relative pl-20'>
						<Image
							className='left-10 w-full absolute'
							src={people}
							alt='people'
						/>
					</div>
				</div>
			</div>
			<div className='w-full flex my-16 max-h-screen'>
				<div className='w-1/2 flex flex-col p-6 '>
					<h3 className='text-5xl my-4'>What We Offer</h3>
					<p className='text-2xl'>
						Our high-performaing services help businesses embrace innovation and
						tackle the challenges of today’s digital world. Based on your
						strategic goals, our services capture and deliver business value in
						a cost-effective way.
					</p>
					<Button label='View All Services' />
				</div>
				<div className='w-1/2 p-6 '>
					<div className='bg-gray  p-16 rounded-xl mb-10'>
						<h2>Consulting</h2>
						<p>
							Work closely with our business consultants, who are on top of the
							latest tech and industry trends. We can help you develop a
							technology strategy and propel your business towards digital
							transformation no matter what your goal is.
						</p>
					</div>
					<div className='bg-gray  p-16 rounded-xl mb-10'>
						<h2>Idea/Discovery Phase</h2>
						<p>
							Work closely with our business consultants, who are on top of the
							latest tech and industry trends. We can help you develop a
							technology strategy and propel your business towards digital
							transformation no matter what your goal is.
						</p>
					</div>
					<div className='bg-gray  p-16 rounded-xl mb-10'>
						<h2>Testing Phase</h2>
						<p>
							Work closely with our business consultants, who are on top of the
							latest tech and industry trends. We can help you develop a
							technology strategy and propel your business towards digital
							transformation no matter what your goal is.
						</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col mt-10 w-full border-gray border-b-[1px]'>
				<p className='text-5xl border-gray border-b-[1px]  pb-6'>
					People have infinite ideas,{' '}
					<span className='mb-2 w-fit font-normal text-transparent  bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
						we gives them life!{' '}
					</span>
				</p>
				<div className='grid grid-cols-4 gap-4 my-16 '>
					<div>
						<h3 className='text-8xl text-center'>20+</h3>
						<p className='mb-2 w-full text-center text-xl font-normal text-transparent  bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
							Years of Experience
						</p>
					</div>
					<div>
						<h3 className='text-8xl text-center'>100+</h3>
						<p className='mb-2 w-full text-center text-xl font-normal text-transparent  bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
							Employee
						</p>
					</div>
					<div>
						<h3 className='text-8xl text-center'>1000+</h3>
						<p className='mb-2 w-full text-center text-xl font-normal text-transparent  bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
							Successful Project Launches
						</p>
					</div>
					<div>
						<h3 className='text-8xl text-center'>30+</h3>
						<p className='mb-2 w-full text-center text-xl font-normal text-transparent  bg-clip-text bg-gradient-to-r from-blue via-purple to-pink'>
							Successful Project Launches
						</p>
					</div>
				</div>
			</div>
			<div className='my-8 w-fit font-semibold text-6xl text-center leading-[68px] '>
				Want to know how our experts can help your project development?
			</div>
			<div className='flex my-8 bg-white max-w-max rounded-md  h-[50px] items-center mt-8 '>
				<button className='flex px-5  py-3 text-black font-bold text-sm'>
					Contact Us
				</button>
				<div className='flex border-l-2 px-4  py-3 border-black h-full'>
					<Image src={chevron} alt=''></Image>
					<Image src={chevron} alt=''></Image>
				</div>
			</div>
		</main>
	);
}
