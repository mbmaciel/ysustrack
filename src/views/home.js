import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ysustrack</title>
        <meta property="og:title" content="Ysustrack" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Rastreamento de veículos com precisão
            </h1>
            <span className="home-hero-sub-heading">
              Auto GPS Tracker Website
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button1 button">Começe aqui</button>
              <button className="home-hero-button2 button">Saiba mais →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container02">
            <span className="home-text sectionTitle">
              <span>Nossa empresa</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Por que escolher Ysustrack
            </h2>
            <span className="home-details-sub-heading">
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
              ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem ipsum dolor.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1627642597814-eb117a851f93?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container03">
              <span className="home-text03 sectionTitle">
                <span>Recursos</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Recursos avançados Ysustrack
              </h2>
              <span className="home-features-sub-heading">
                Lorem ipsum dolor site amet , lorem isum dolor
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                Heading="Tracking em tempo real"
                SubHeading="Acompanhe a localização do seu veículo em tempo real com nossa avançada tecnologia GPS."
              ></FeatureCard>
              <FeatureCard
                Heading="Cerca Geográfica"
                SubHeading="Configure limites virtuais e receba alertas instantâneos quando seu veículo entrar ou sair de uma área designada."
              ></FeatureCard>
              <FeatureCard
                Heading="Reprodução de Rota Histórica"
                SubHeading="Revise o histórico completo das rotas do seu veículo e reproduza a viagem em um mapa."
              ></FeatureCard>
              <FeatureCard
                Heading="Monitoramento de velocidade"
                SubHeading="Monitore a velocidade do seu veículo e receba alertas caso ultrapasse o limite definido."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1">
          <div className="home-container05">
            <span className="home-text06 sectionTitle">
              <span>PREÇOS</span>
              <br></br>
            </span>
            <h2 className="home-pricing-heading heading2">
              Escolha seu plano 
            </h2>
            <span className="home-pricing-sub-heading">
              Selecione um de nossos planos de preços acessíveis para começar
              hoje mesmo
            </span>
          </div>
          <div className="home-container06">
            <div className="home-pricing-card">
              <div className="home-container07">
                <span className="home-text09 heading3">GRATUITO</span>
                <span className="home-free-plan-description">
                  Obtenha recursos básicos de rastreamento gratuitamente
                </span>
              </div>
              <div className="home-container08">
                <span className="home-text10">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container09">
                <div className="home-container10">
                  <span className="home-text13">✔</span>
                  <span className="home-free-plan-features">
                    Rastreamento em tempo real
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text14">✔</span>
                  <span className="home-free-plan-features1">
                    Alertas da Cerca Geográfica
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text15">✔</span>
                  <span className="home-free-plan-features2">
                    History playback
                  </span>
                </div>
                <div className="home-container13">
                  <span className="home-text16">✔</span>
                  <span className="home-free-plan-features3">
                    Número limitado de dispositivos
                  </span>
                </div>
              </div>
              <button className="home-button button">
                Continua com o gratuito
              </button>
            </div>
            <div className="home-pricing-card1">
              <div className="home-container14">
                <span className="home-text17 heading3">BASICO</span>
                <span className="home-basic-plan-description">
                  Atualize para recursos de rastreamento mais avançados
                </span>
              </div>
              <div className="home-container15">
                <span className="home-text18">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">30</span>
                <span className="home-text21">/ mês</span>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <span className="home-text22">✔</span>
                  <span className="home-text23">
                    Todos os recursos do plano gratuito
                  </span>
                </div>
                <div className="home-container18">
                  <span className="home-text24">✔</span>
                  <span className="home-basic-plan-features">
                    Rastreamento ilimitado de dispositivos
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-text25">✔</span>
                  <span className="home-basic-plan-features1">
                    Cercas geográficas personalizáveis
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-text26">✔</span>
                  <span className="home-basic-plan-features2">
                    Relatórios e análises detalhadas
                  </span>
                </div>
                <div className="home-container21">
                  <span className="home-text27">✔</span>
                  <span className="home-basic-plan-features3">
                    Suporte 24/7
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <button className="home-button1 button">
                Tente o plano básico
              </button>
            </div>
            <div className="home-pricing-card2">
              <div className="home-container22">
                <span className="home-text28 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="home-pro-plan-description">
                  Desbloqueie recursos premium para uso profissional
                </span>
              </div>
              <div className="home-container23">
                <span className="home-text31">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">90</span>
                <span className="home-text34">/ mês</span>
              </div>
              <div className="home-container24">
                <div className="home-container25">
                  <span className="home-text35">✔</span>
                  <span className="home-text36">
                    <span>Todos recursos do plano básico</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-container26">
                  <span className="home-text39">✔</span>
                  <span className="home-pro-plan-features">
                    Diagnóstico avançado de veículos
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text40">✔</span>
                  <span className="home-pro-plan-features1">
                    Monitoramento do comportamento do motorista
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text41">✔</span>
                  <span className="home-pro-plan-features2">
                    Acesso a API para integração
                  </span>
                </div>
              </div>
              <button className="home-button2 button">Tente o plano PRO</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Explore nossas imagens
          </h1>
          <span className="home-gallery-sub-heading">
            Descubra os recursos e benefícios do nosso rastreador GPS automático
            avançado
          </span>
          <div className="home-container29">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1498595718608-0981b1355981?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1544468607-e7b3e848ff87?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1676288176869-b2e1c6bea1a4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1489008777659-ad1fc8e07097?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1505875476250-872a2b5161b6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1678033567419-52bb150e2628?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1519752235002-1f7189299e90?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1468415676748-acbcf43dd6e1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1681392352609-825a0675ed07?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1541899318832-c914972d8d1c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1530046614490-89e6f776b83b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1610497072993-b509c7b10d0e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjY1Nzk4N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Conheça o aplicativo 
          </h1>
          <span className="home-banner-sub-heading">
            Lorem ipsum dolor site amet , lorem
          </span>
          <button className="home-banner-button button">Saiba mais</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container30">
              <span className="home-text42 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text45 heading2">
                <span>Perguntas</span>
                <br></br>
                <span>mais comuns</span>
              </h2>
              <span className="home-text49">
                <span>
                  Aqui estão algumas das perguntas mais comuns que recebemos.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="home-container31">
              <Question
                Answer="Um rastreador GPS automotivo é um dispositivo que usa a tecnologia Global Positioning System (GPS) para rastrear a localização de um veículo em tempo real."
                Question="O que é um rastreador GPS automático?"
              ></Question>
              <Question
                Answer="Um rastreador GPS automático recebe sinais de satélites GPS para determinar a localização precisa de um veículo. Em seguida, transmite essas informações para um servidor central, que pode ser acessado por meio de um site ou aplicativo móvel."
                Question="Como funciona um rastreador GPS automático?"
              ></Question>
              <Question
                Answer="O uso de um rastreador GPS automático pode oferecer vários benefícios, incluindo recuperação de roubo, melhor gerenciamento de frota, redução de custos de combustível, maior segurança do motorista e maior produtividade."
                Question="Quais são os benefícios de usar um rastreador GPS automático?"
              ></Question>
              <Question
                Answer="Embora alguns rastreadores GPS automáticos sejam projetados para instalação própria, é recomendável que um profissional instale o dispositivo para garantir a funcionalidade e o posicionamento adequados."
                Question="Posso instalar um rastreador GPS automático sozinho?"
              ></Question>
              <Question
                Answer="Sim, sites respeitáveis de rastreadores GPS priorizam a segurança e a privacidade das informações pessoais de seus usuários. Eles empregam criptografia e outras medidas de segurança para proteger os dados contra acesso não autorizado."
                Question="Minhas informações pessoais estão seguras com um rastreador GPS automático?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
