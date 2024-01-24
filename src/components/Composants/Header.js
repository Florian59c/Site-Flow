import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to={"/projets"}>
                <h1>Liste des projets</h1>
            </Link>
        </div>
    )
}

export default Header