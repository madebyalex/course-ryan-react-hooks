import React from 'react';

function DashboardUserPlus(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
	<g fill={fill}>
		<path d="M11 41c0 .6.4 1 1 1s1-.4 1-1v-6.5h6.5c.6 0 1-.4 1-1s-.4-1-1-1H13V26c0-.6-.4-1-1-1s-1 .4-1 1v6.5H4.5c-.6 0-1 .4-1 1s.4 1 1 1H11V41z"/>
		<path d="M52.1 43.6l-2-.9c-.5-.2-1.1 0-1.3.5-.2.5 0 1.1.5 1.3l2 .9c13.9 5.9 15.2 6.6 15.2 12v2.1h-55v-2.1c-.1-1.2.1-2.3.6-3.3 1.7-3.6 6.4-5.4 15.7-9l.7-.3c.5-.2.8-.8.6-1.3-.1-.5-.7-.7-1.2-.5l-.7.3c-9.8 3.7-14.8 5.6-16.8 10-.6 1.2-.9 2.7-.8 4.2v3.1c0 .6.4 1 1 1h57c.6 0 1-.4 1-1v-3.1c-.1-6.9-2.9-8.1-16.5-13.9z"/>
		<path d="M39 43.5c6.3 0 11.5-5.2 11.5-11.5v-9c0-6.3-5.2-11.5-11.5-11.5S27.5 16.7 27.5 23v9c0 6.3 5.2 11.5 11.5 11.5zM29.5 23c0-5.2 4.3-9.5 9.5-9.5s9.5 4.3 9.5 9.5v9c0 5.2-4.3 9.5-9.5 9.5s-9.5-4.3-9.5-9.5v-9z"/>
	</g>
</svg>
	);
};

export default DashboardUserPlus;