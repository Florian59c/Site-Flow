import React from 'react';
import { Link } from 'react-router-dom';

const boutonProjets = ({ titre, url }) => {
    return (
        <div className='boutonProjets'>
            <Link to={`/detailsprojet/${url}`}>
                <button>
                    <h1>
                        {titre}
                    </h1>
                </button>
            </Link>
        </div>
    )
}

export default boutonProjets