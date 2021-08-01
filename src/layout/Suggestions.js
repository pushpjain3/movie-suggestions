import React from "react";
import SuggestionItems from "./SuggestionItems";

const Suggestions = ({ genreData,genre }) => {
	return (
		<div className='suggestions'>
			<h1 className='suggestions-header'>{genre} Suggestions </h1>
			{genreData.map((movie) => (
				<div>
					<hr />
					<SuggestionItems key={movie.name} movie={movie} />
				</div>
			))}
		</div>
	);
};

export default Suggestions;
