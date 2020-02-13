import React from 'react';

function DashboardRegister(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
	<g fill={fill}>
		<path d="M60 7h-9v2h9c.6 0 1 .4 1 1v54c0 .6-.4 1-1 1H12.5c-.7 0-1.5-.6-1.5-1V10c0-.6.4-1 1-1h9V7h-9c-1.7 0-3 1.3-3 3v54c0 1.7 1.9 3 3.5 3H60c1.7 0 3-1.3 3-3V10c0-1.7-1.3-3-3-3z"/>
		<path d="M26 19h20c1.7 0 3-1.3 3-3V6c0-.6-.4-1-1-1H24c-.6 0-1 .4-1 1v10c0 1.7 1.3 3 3 3zM25 7h22v9c0 .6-.4 1-1 1H26c-.6 0-1-.4-1-1V7z"/>
		<path d="M25 28h22c.6 0 1-.4 1-1s-.4-1-1-1H25c-.6 0-1 .4-1 1s.4 1 1 1z"/>
		<path d="M25 36h22c.6 0 1-.4 1-1s-.4-1-1-1H25c-.6 0-1 .4-1 1s.4 1 1 1z"/>
		<path d="M25 44h22c.6 0 1-.4 1-1s-.4-1-1-1H25c-.6 0-1 .4-1 1s.4 1 1 1z"/>
		<path d="M25 52h22c.6 0 1-.4 1-1s-.4-1-1-1H25c-.6 0-1 .4-1 1s.4 1 1 1z"/>
		<path d="M55 59H17.5c-.1 0-.4-.1-.5-.2V15h4v-2h-4c-1.1 0-2 .9-2 2v44c0 1.1 1.4 2 2.5 2H55c1.1 0 2-.9 2-2V15c0-1.1-.9-2-2-2h-4v2h4v44z"/>
	</g>
</svg>
	);
};

export default DashboardRegister;