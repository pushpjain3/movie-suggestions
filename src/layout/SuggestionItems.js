import React from 'react'

const SuggestionItems = ({movie:{name,image,movie_rating,movie_description}})=> {
    return (
			<div className='suggestion-card'>
				<div className='card-left'>
					<img src={image} alt='The Cover...' />
				</div>
				<div className='card-info'>
					<h2 className='card-info-header'>{name}</h2>
					<p>{movie_description}</p>
					<div className='rating'>
						<h3>Rating</h3>
						<h2>
							<span>{movie_rating}</span>/10
						</h2>
					</div>
				</div>
			</div>
		);
}

export default SuggestionItems
