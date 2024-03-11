'use client';
import React, { ReactNode } from 'react';
import { Parallax } from 'react-scroll-parallax';

const UseParallax = ({ children }: { children: ReactNode }) => {
	return <Parallax scale={[0.8, 1]}>{children}</Parallax>;
};

export default UseParallax;
