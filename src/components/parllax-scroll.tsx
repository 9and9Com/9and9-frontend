'use client';
import React, { useRef } from 'react';

const ParallaxScroll: React.FC = () => {
	const rightPanelRef = useRef<HTMLDivElement>(null);

	const handleLeftPanelScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const target = e.currentTarget as HTMLDivElement;
		const maxScrollTop = target.scrollHeight - target.clientHeight;
		const scrollTop = maxScrollTop - target.scrollTop;
		if (rightPanelRef.current) {
			rightPanelRef.current.scrollTop = scrollTop;
		}
	};

	return (
		<div className='container'>
			<div className='left-panel' onScroll={handleLeftPanelScroll}>
				{/* Content for the left panel */}
				{/* This panel will stay fixed */}
				<div className='content'>
					<h2>Fixed Content</h2>
					<p>This content stays fixed while scrolling.</p>
				</div>
			</div>
			<div className='right-panel' ref={rightPanelRef}>
				{/* Content for the right panel */}
				{/* This panel scrolls */}
				<div className='content'>
					<h2>Scrolling Content</h2>
					<p>
						{Array.from({ length: 250 }, (_, i) => (
							<span key={i}>Scrolling content goes here... </span>
						))}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ParallaxScroll;
