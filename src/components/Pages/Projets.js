import React from 'react'
import Header from '../Composants/Header'
import Footer from '../Composants/Footer'
import BoutonProjets from '../Composants/BoutonProjets'

const Projets = () => {
  return (
    <div>
      <Header />
      <div className='projetsContainer'>
        <BoutonProjets />
        {/* temporaire !!!!! */}
        <h1 style={{ textAlign: 'center' }}>Comming soon</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Projets