import React from 'react'

const Navbar = ({title,icon})=> {
    return (
        <nav className="navigation">
            <i className={icon}/><h1 className="navigation-header"> {title}</h1>
        </nav>
    )
}
Navbar.defaultProps = {
	title: "Movie Suggestions",
	icon: "nav-icon fas fa-film fa-2x",
};
export default Navbar;
