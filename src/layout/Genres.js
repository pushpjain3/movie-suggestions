import React from "react";

const Genres = ({ genreList, buttonClickHandler }) => {
	return (
		<div className='genre-list'>
			{genreList.map((genre) => (
				<button
					className='genre-button'
					key={genre}
					onClick={() => buttonClickHandler(genre)}
				>
					{genre}
				</button>
			))}
		</div>
	);
};

export default Genres;
