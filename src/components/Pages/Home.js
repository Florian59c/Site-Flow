import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import nuit from '../../img/Ciel-nuit.jpg';

const Home = () => {

    return (
        <div className='container' style={{ backgroundImage: `url(${nuit})` }}>
            <div className='titreProjet'>
                <h1>Bienvenue sur <br />"Le site de Flow"</h1>
                <p>Il s'agit de mon portfolio sur lequel je recense les projets que j'ai réalisés pendant mon temps libre ou au cours de mes formations.</p>
            </div>
            <Link to="/Projets">
                <div className='projetIntrouvable'>
                    <div className='boutonProjets'>
                        <button>
                            <h1>Accéder à la liste de mes projets</h1>
                        </button>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default Home