import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './privacidade.css'

const Privacidade = (props) => {
  return (
    <div className="privacidade-container">
      <Helmet>
        <title>Privacidade - Ysustrack</title>
        <meta property="og:title" content="Privacidade - Ysustrack" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="privacidade-details">
        <div className="privacidade-details1">
          <div className="privacidade-container1">
            <span className="privacidade-text sectionTitle">
              <span>Política de privacidade</span>
              <br></br>
            </span>
            <h2 className="privacidade-details-heading heading2">
              Política de Privacidade do Ysustrack
            </h2>
            <span className="privacidade-details-sub-heading">
              <span className="privacidade-text03">
                O Ysustrack respeita a sua privacidade e está comprometido em
                proteger as suas informações pessoais. Esta Política de
                Privacidade descreve como coletamos, usamos e compartilhamos
                informações quando você utiliza o nosso aplicativo de
                rastreamento de veículos, o Ysustrack.
              </span>
              <br className="privacidade-text04"></br>
              <br className="privacidade-text05"></br>
              <span className="privacidade-text06">Coleta de Informações:</span>
              <br className="privacidade-text07"></br>
              <span className="privacidade-text08">
                Coletamos informações pessoais, como nome, endereço, número de
                telefone, e informações do veículo quando você se cadastra no
                aplicativo.
              </span>
              <br className="privacidade-text09"></br>
              <span className="privacidade-text10">
                Também coletamos informações de localização do veículo quando o
                aplicativo está em uso, a fim de fornecer os serviços de
                rastreamento.
              </span>
              <br className="privacidade-text11"></br>
              <br className="privacidade-text12"></br>
              <span className="privacidade-text13">Uso de Informações:</span>
              <br className="privacidade-text14"></br>
              <span className="privacidade-text15">
                Utilizamos as informações coletadas para fornecer os serviços de
                rastreamento de veículos, para melhorar e personalizar a
                experiência do usuário, e para entrar em contato em caso de
                necessidade.
              </span>
              <br className="privacidade-text16"></br>
              <span className="privacidade-text17">
                Não compartilhamos as informações pessoais dos usuários com
                terceiros, exceto quando necessário para fornecer os serviços
                contratados ou cumprir com requisitos legais.
              </span>
              <br className="privacidade-text18"></br>
              <br className="privacidade-text19"></br>
              <span className="privacidade-text20">Segurança:</span>
              <br className="privacidade-text21"></br>
              <span className="privacidade-text22">
                Implementamos medidas de segurança para proteger as informações
                pessoais dos usuários, incluindo criptografia e restrições de
                acesso.
              </span>
              <br className="privacidade-text23"></br>
              <br className="privacidade-text24"></br>
              <span className="privacidade-text25">
                Cookies e Tecnologias Semelhantes:
              </span>
              <br className="privacidade-text26"></br>
              <span className="privacidade-text27">
                Utilizamos cookies e tecnologias similares para melhorar a
                funcionalidade do aplicativo e para coletar informações sobre o
                uso do Ysustrack.
              </span>
              <br className="privacidade-text28"></br>
              <br className="privacidade-text29"></br>
              <span className="privacidade-text30">
                Alterações na Política de Privacidade:
              </span>
              <br className="privacidade-text31"></br>
              <span className="privacidade-text32">
                Podemos atualizar esta Política de Privacidade de tempos em
                tempos. Recomendamos que os usuários revejam periodicamente esta
                política para estar cientes de quaisquer alterações.
              </span>
              <br className="privacidade-text33"></br>
              <br className="privacidade-text34"></br>
              <span className="privacidade-text35">
                Ao utilizar o Ysustrack, você concorda com a coleta e uso de
                informações conforme descrito nesta Política de Privacidade. Se
                tiver alguma dúvida ou preocupação sobre a nossa Política de
                Privacidade, entre em contato conosco através dos canais de
                suporte disponíveis no aplicativo.
              </span>
              <br className="privacidade-text36"></br>
              <br className="privacidade-text37"></br>
              <span className="privacidade-text38">
                Obrigado por escolher o Ysustrack para rastreamento de veículos.
              </span>
            </span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Privacidade
