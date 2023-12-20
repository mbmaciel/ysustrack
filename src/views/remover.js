import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './remover.css'

const Remover = (props) => {
  return (
    <div className="remover-container">
      <Helmet>
        <title>Remover - Ysustrack</title>
        <meta property="og:title" content="Remover - Ysustrack" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="remover-details">
        <div className="remover-container1">
          <span className="remover-text sectionTitle">
            <span>REMOÇÃO DE USUÁRIO</span>
            <br></br>
          </span>
          <h2 className="remover-details-heading heading2">Remover Usuário</h2>
          <span className="remover-details-sub-heading">
            Preencha o formulário abaixo para que Ysustrack retire completamente
            seu usuário do banco de dados.
          </span>
        </div>
        <form className="remover-form">
          <label>Email</label>
          <input type="text" placeholder="Email" className="input" />
          <button type="button" className="button">
            Eliminar
          </button>
        </form>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Remover
