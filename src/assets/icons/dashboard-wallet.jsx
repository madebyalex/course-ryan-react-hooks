import React from 'react';

function DashboardWallet(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
	<g fill={fill}>
		<path d="M53.1 52.6c-1.7 0-3-1.3-3-3v-10c0-1.7 1.3-3 3-3H63v-10c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2V64c0 1.1.9 2 2 2h55c1.1 0 2-.9 2-2V52.6h-9.9z" fill="none"/>
		<path d="M67 34.6c-.6 0-1 .4-1 1s.4 1 1 1 1 .4 1 1v12c0 .6-.4 1-1 1H53.1c-.6 0-1-.4-1-1v-10c0-.6.4-1 1-1H64c.6 0 1-.4 1-1v-11c0-2.2-1.8-4-4-4H7.6C5.6 22.6 4 21 4 19s1.6-3.6 3.6-3.6h10l-6 2.3c-.5.2-.8.8-.6 1.3.2.4.5.6.9.6.1 0 .2 0 .4-.1l31-12c.5-.2.8-.8.6-1.3s-.8-.8-1.3-.6l-20.2 7.8c-.1-.1-.3-.1-.5-.1H7.6c-3.1 0-5.6 2.5-5.6 5.6 0 1.7.7 3.2 1.9 4.2-1.1.7-1.9 2-1.9 3.4V64c0 2.2 1.8 4 4 4h55c2.2 0 4-1.8 4-4V52.6h2c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zM61 66H6c-1.1 0-2-.9-2-2V26.6c0-1.1.9-2 2-2h55c1.1 0 2 .9 2 2v10h-9.9c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3H63V64c0 1.1-.9 2-2 2z"/>
		<circle cx="59" cy="44.6" r="2"/>
		<path d="M26.1 18.9c.2.4.5.6.9.6.1 0 .2 0 .4-.1l23.1-8.7 3.6 8.1c.2.5.8.7 1.3.5.5-.2.7-.8.5-1.3l-1.6-3.6H59c.6 0 1 .4 1 1v3c0 .6.4 1 1 1s1-.4 1-1v-3c0-1.7-1.3-3-3-3h-5.6L51.9 9c-.2-.5-.8-.7-1.3-.5l-24 9c-.5.3-.7.9-.5 1.4z"/>
	</g>
</svg>
	);
};

export default DashboardWallet;