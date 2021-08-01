import React from "react";



const Genres = ({ genreList, buttonClickHandler }) => {


	return (
		<div className='genre-list'>
			{genreList.map((genre) => {
				
			
				return (
					<button
						className='genre-button'
						key={genre}
						onClick={() => buttonClickHandler(genre)}
					>
						<h2>{genre}</h2>
					</button>
				);})}
		</div>
	);
};

export default Genres;
