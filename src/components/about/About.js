import React from 'react'
import Style from './About.module.scss'
import Terminal from './Terminal'
import { Box } from '@mui/material'
import { info } from '../../info/Info'
import { Helmet } from 'react-helmet-async'
import SrOnlyHeading from '../SrOnlyHeading'
import ServiceLinks from '../services/ServiceLinks'

export default function About() {
  const firstName = info.firstName.toLowerCase()

  function aboutMeText() {
    return (
      <>
        <p>
          <span className={Style.pink} /*style={{ color: info.baseColor }}*/>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat about{firstName}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span>
          </span>
          {info.bio}
        </p>
      </>
    )
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Knowledge In</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Exposed To</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    )
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={'span'} mr={'1rem'}>
                {hobby.emoji}
              </Box>
              {hobby.link ? (
                <a href={hobby.link} target="_blank" rel="noreferrer">
                  {hobby.label}
                </a>
              ) : (
                <>{hobby.label}</>
              )}
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Sobre Mim | Marcos Henrique Corrêa — Programador e Gestor de Tráfego</title>
        <meta name="description" content="Conheça Marcos Henrique Corrêa, programador full stack e gestor de tráfego em Santo Cristo, RS. React, Node.js, JavaScript, Google Ads e Meta Ads." />
        <link rel="canonical" href="https://marck0101.com.br/about" />
      </Helmet>
      <SrOnlyHeading>Sobre Marcos Henrique Corrêa</SrOnlyHeading>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        mt={'3rem'}
      >
        <Terminal text={aboutMeText()} />
        <Terminal text={skillsText()} />
        <Terminal text={miscText()} />
      </Box>
      <Box my={'3rem'} px={'1rem'}>
        <ServiceLinks title={'Conheça minhas áreas de atuação'} />
      </Box>
    </>
  )
}
