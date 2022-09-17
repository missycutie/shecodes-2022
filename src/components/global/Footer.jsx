import React from 'react';
import Logo from '../../assets/svg/Logo';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className='footer-wrapper'>
					<div className='footer-logo'>
						<Link to='/'>
							<Logo />
							<span className='logo-name'>Onee Care</span>
						</Link>
					</div>
					<nav>
						<Link to='/about-us'>
							About us
						</Link>
						
					</nav>

				</div>
			</div>
		</footer>

	);
};

export default Footer;