import React from 'react'
import Style from './About.module.scss'
import { info } from '../../info/Info'
import { Helmet } from 'react-helmet-async'
import ServiceLinks from '../services/ServiceLinks'

export default function About() {
  return (
    <>
      <Helmet>
        <title>{info.paginas.sobre.titulo}</title>
        <meta name="description" content={info.paginas.sobre.descricao} />
        <link rel="canonical" href="https://marck0101.com.br/about" />
      </Helmet>
      <main className="pagina">
        <header className="cabecalho">
          <p className="rotulo">sobre · {info.location}</p>
          <h1>Sobre {info.fullName}</h1>
          <p className="apoio">{info.tagline}</p>
        </header>

        <section className={Style.secao} aria-labelledby="quem-sou">
          <h2 id="quem-sou">Quem sou</h2>
          <div className={Style.bio}>
            {info.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={Style.secao} aria-labelledby="como-trabalho">
          <h2 id="como-trabalho">Como eu trabalho</h2>
          <ol className={Style.pilares}>
            {info.pillars.map((pillar, index) => (
              <li key={pillar.title}>
                <span className={`dado ${Style.num}`}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={Style.secao} aria-labelledby="ferramentas">
          <h2 id="ferramentas">Ferramentas</h2>
          <div className={Style.skills}>
            {info.skills.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={Style.hobbies}>{info.hobbies}</p>
        </section>

        <div className={Style.servicos}>
          <ServiceLinks title={'Minhas áreas de atuação'} />
        </div>
      </main>
    </>
  )
}
