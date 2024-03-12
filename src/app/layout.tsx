'use client';

import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Providers } from './providers';
import Toggle from '@/components/toggle';
import { ThemeProvider } from 'next-themes';
// Font files can be colocated inside of `pages`

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head></head>
			<body>
				<ThemeProvider attribute='class'>
					<div
						className={
							'font-grotesk flex min-h-screen flex-col  items-center  pt-0  bg-white dark:bg-black'
						}
					>
						<Providers>
							<Header />
							<div className='mt-5 relative'>{children}</div>
							<Footer />
							<div className='z-10 fixed w-[50px] right-0 m-10'>
								<Toggle />
							</div>
						</Providers>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
