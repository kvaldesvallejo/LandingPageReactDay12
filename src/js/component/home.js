import React from "react";
import { NavBar } from "./navBar.js";
import { Jumbotron } from "./jumbo";
import { Card } from "./card";
import { Footer } from "./footer";
//create your first component
export function Home() {
	return (
		<div>
			<nav>
				<NavBar />
			</nav>
			<div className="card-group container mt-5">
				<Jumbotron />
			</div>

			<div className="card-group container mt-5 text-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
