import React from 'react';
import './preloader.scss';
import preloaderImg from '../../img/Group 64.svg';
import {useSpring, animated} from 'react-spring';

const Preloader = ({...props}) => {
	const rotation = useSpring({
		from: {transform: 'rotate(0deg)'},
		to: {transform: 'rotate(360deg)'},
		config: {duration: 1500},
		loop: true,
	});
	return (
		<div className="preloader">
			<animated.img src={preloaderImg} alt="Preloaer" style={rotation} {...props} />
		</div>
	);
};

export default Preloader;
