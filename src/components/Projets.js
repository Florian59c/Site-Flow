import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BoutonProjets from './BoutonProjets'

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