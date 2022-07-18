import React from 'react'

const boutonProjets = ({ titre }) => {
    return (
        <div className='boutonProjets'>
            <button>
                <h1>
                    {titre}
                </h1>
            </button>
        </div>
    )
}

export default boutonProjets