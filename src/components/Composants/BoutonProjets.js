import React from 'react';
import { Link } from 'react-router-dom';

const boutonProjets = ({ titre, id }) => {
    return (
        <div className='boutonProjets'>
            <Link to={`/details/${id}`}>
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