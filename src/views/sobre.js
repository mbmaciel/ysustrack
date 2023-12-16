import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './sobre.css'

const Sobre = (props) => {
  return (
    <div className="sobre-container">
      <Helmet>
        <title>Sobre - Ysustrack</title>
        <meta property="og:title" content="Sobre - Ysustrack" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="sobre-container1">
        <form className="sobre-form">
          <label>Nome</label>
          <input type="text" placeholder="placeholder" className="input" />
        </form>
      </div>
    </div>
  )
}

export default Sobre
