import React, { useState } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Genres from "./layout/Genres";
import Suggestions from "./layout/Suggestions";
import TheNun from "./resources/images/TheNun.jfif"
import sinister from "./resources/images/sinister.jpg"
import babadook from "./resources/images/babadook.jfif"
import titanic from "./resources/images/titanic.jfif"
import AWC from "./resources/images/AWC.jfif"
import ranjhana from "./resources/images/ranjhana.jfif"
import yourname from "./resources/images/yourname.jpg"
import ASV from "./resources/images/ASV.jfif"
import IWTEYP from "./resources/images/IWTEYP.jpg"

const movieData = {
	Horror: [
		{
			name: "The Nun(2018)",
			movie_description:
				"When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. They uncover the order's unholy secret. Risking not only their lives but their faith and their very souls, they confront a demonic nun.",
			movie_rating: "5.3",
			image: TheNun,
		},
		{
			name: "Sinister(2012)",
			movie_description:
				"Ellison Oswald is in a slump; he hasn't had a best seller in more than 10 years and is becoming increasingly desperate for a hit. So, when he discovers the existence of a snuff film showing the deaths of a family, he vows to solve the mystery. He moves his own family into the victims' home and gets to work. However, Ellison learns that living in the house may be fatal.",
			movie_rating: "6.8",
			image: sinister,
		},
		{
			name: "The Babadook(2014)",
			movie_description:
				"A single mother, plagued by the violent death of her husband, battles with her son's fear of a monster lurking in the house, but soon discovers a sinister presence all around her.",
			movie_rating: "6.8",
			image: babadook,
		},
	],
	Romance: [
		{
			name: "Titanic(1997)",
			movie_description:
				"Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him",
			movie_rating: "7.8",
			image: titanic,
		},
		{
			name: "After We Collided(2020)",
			movie_description:
				"Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",
			movie_rating: "5.2",
			image: AWC,
		},
		{
			name: "Raanjhanaa(2013)",
			movie_description:
				"When Kundan finds that his childhood love, Zoya, likes someone from her community, he decides to forget about her. However, when he realises she is lying about her fiance's religion, he goes berserk.",
			movie_rating: "7.6",
			image: ranjhana,
		},
	],
	Anime: [
		{
			name: "Your Name.(2016)",
			movie_description:
				"Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
			movie_rating: "8.4",
			image: yourname,
		},
		{
			name: "A Silent Voice(2016)",
			movie_description:
				"When a grade school student with impaired hearing is bullied mercilessly, she transfers to another school. Years later, one of her former tormentors sets out to make amends.",
			movie_rating: "8.2",
			image: ASV,
		},
		{
			name: "I Want to Eat Your Pancreas",
			movie_description:
				"An aloof boy comes across a book in a hospital waiting room. He soon discovers that it is a diary kept by his very popular classmate who reveals to him that she is secretly suffering from a fatal pancreatic illness.",
			movie_rating: "8",
			image: IWTEYP,
		},
	],
};
const genreList = Object.keys(movieData);

const App = () => {
	const [currentGenre, setCurrentGenre] = useState("Horror");
	const buttonClickHandler = (genre) => {
		setCurrentGenre(genre);
	};

	return (
		<div className='App'>
			<Navbar />
			<Genres genreList={genreList} buttonClickHandler={buttonClickHandler} />
			<Suggestions genreData={movieData[currentGenre]} genre={currentGenre} />
			<footer className='footer'>
				<div className='footer-content'>
					<a
						className='link footer-link'
						href='https://pushpjain.netlify.app/projects.html'
					>
						<h2>More of such interesting projects.</h2>
					</a>
				</div>
			</footer>
		</div>
	);
};

export default App;
