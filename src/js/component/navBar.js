import React from "react";

export const NavBar = props => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className=" container mt-5">
				<a className="navbar-brand text-white ">Start Boostrap</a>
				<form className="form-inline">
					<a className="nav-item nav-link active text-white" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link text-white" href="#">
						About
					</a>
					<a className="nav-item nav-link text-white" href="#">
						Services
					</a>
					<a className="nav-item nav-link text-white" href="#">
						Contact
					</a>
				</form>
			</div>
		</nav>
	);
};
