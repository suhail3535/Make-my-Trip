import React, {useEffect, useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
// import { Button } from './Styles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 120){
	setVisible(true)
	}
	else if (scrolled <= 120){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};
// useEffect(())
window.addEventListener('scroll', toggleVisible);

return (
	<button style={{fontSize:"40px"}}>
	<FaArrowCircleUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none',position:"absolute",top:"90%",left:"96%",position:"fixed"}} />
	</button>
);
}

export default ScrollButton;
