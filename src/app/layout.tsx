'use client';

import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Providers } from './providers';
// Font files can be colocated inside of `pages`

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={
					'flex min-h-screen flex-col items-center  font-grotesk  pt-0 '
				}
			>
				<Providers>
					<Header />
					<div className='mt-5'>{children}</div>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
