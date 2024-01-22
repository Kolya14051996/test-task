import React from "react";
import Button from "../../UI/button/Button";
import logo from "../../../img/Logo.svg";
import "./header.scss";

import { textButtons } from "../../../utils/constants/text";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<nav className="nav">
					<div className="nav__logo">
						<a href="#!" alt="logo">
							<img src={logo} alt="Logo" />
						</a>
					</div>
					<div className="nav__auth-panel">
						<Button>{textButtons.users}</Button>
						<Button>{textButtons.signUp}</Button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
