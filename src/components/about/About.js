import React from 'react'
import Style from './About.module.scss'
import Terminal from './Terminal'
import { Box } from '@mui/material'
import { info } from '../../info/Info'
import { Helmet } from 'react-helmet-async'

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
        <title>Sobre Mim | Marcos Corrêa — Desenvolvedor Full Stack</title>
        <meta name="description" content="Conheça Marcos Henrique Corrêa — Desenvolvedor Full Stack em Santo Cristo, RS. Habilidades em React, Node.js, JavaScript, Tailwind e mais." />
        <link rel="canonical" href="https://marck0101.com.br/about" />
      </Helmet>
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
    </>
  )
}
