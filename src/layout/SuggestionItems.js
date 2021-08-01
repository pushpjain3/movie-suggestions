import React from 'react'

const SuggestionItems = ({movie:{name,image,movie_rating,movie_description}})=> {
    return (
			<div class='suggestion-card'>
				<div class='card-left'>
					<img
						src={image}
						alt='The Cover...'
					/>
				</div>
				<div class='card-info'>
					<h2>{name}</h2>
					<p>
						{movie_description}
					</p>
					<h3>
						Rating:<span>{movie_rating}</span>/10
					</h3>
				</div>
			</div>
		);
}

export default SuggestionItems
