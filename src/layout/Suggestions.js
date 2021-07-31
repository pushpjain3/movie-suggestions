import React from "react";
import SuggestionItems from "./SuggestionItems";

const Suggestions = ({ genreData }) => {
	return (<div className="suggestions">
        {
            genreData.map(movie=>(
                <SuggestionItems movie={movie}/>
            ))
        }
    </div>);
};

export default Suggestions;
