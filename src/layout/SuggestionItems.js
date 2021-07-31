import React from 'react'

const SuggestionItems = ({movie:{name,image,movie_rating,movie_description}})=> {
    return (
        <div className="suggestion-card">
            <div className="card-left">
                <img src={image} alt={name + "cover..."} />
                {console.log(image)}
            </div>
            <div className="card-info">{movie_description}</div>
            
        </div>
    )
}

export default SuggestionItems
