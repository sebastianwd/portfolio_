import React from 'react'
import { Typograhy, WordSpinner, WordAnimator } from '@components'
import styled from '@emotion/styled'
import { StyledComponent, spacing, bp } from '@theme'
import reactIcon from '@images/react-icon.svg'
import graphqlIcon from '@images/graphql-icon.svg'
import reactNativeIcon from '@images/react-native-icon.svg'
import nodejsIcon from '@images/nodejs-icon.svg'
import netIcon from '@images/net-icon.svg'
import sqlIcon from '@images/sql-icon.svg'
import siteLogo from '@images/site-logo.png'
import { css } from '@emotion/core'
import { ParticleCanvas } from './components'

const brands = [
  {
    value: 'React',
    file: reactIcon,
  },
  {
    value: 'GraphQL',
    file: graphqlIcon,
  },
  {
    value: 'React Native',
    file: reactNativeIcon,
  },
  {
    value: 'NodeJS',
    file: nodejsIcon,
  },
  {
    value: 'Microsoft .NET',
    file: netIcon,
  },
  {
    value: 'SQL',
    file: sqlIcon,
  },
]

const HomePage = () => {
  return (
    <Section>
      <Container className="container">
        <Row>
          <LeftContent className="col-sm-9 col-md-8">
            <Tag as="span" css={offsetTag} size={5} variant="alternate">
              {'<body>'}
            </Tag>
            <Tag as="span" size={5} variant="alternate">
              {'<h1>'}
            </Tag>
            <WordAnimator
              as="h1"
              size={10}
              css={heading}
              words="Hi, I am Sebastian"
              delay={60}
            >
              <Tag
                as="span"
                size={5}
                variant="alternate"
                inline
                className="animated fadeIn"
                css={inlineTag}
              >
                {'</h1>'}
              </Tag>
            </WordAnimator>
            <Typograhy as="p">
              <Typograhy as="span" weight="light" size={5.5}>
                Full stack web and mobile developer specialized in JavaScript
                with experience working with technologies like{' '}
              </Typograhy>
              <WordSpinner items={brands} />
            </Typograhy>
          </LeftContent>
          <RightContent className="col-sm-3 col-md-4">
            <ParticleCanvas src={siteLogo} />
          </RightContent>
        </Row>
      </Container>
    </Section>
  )
}

const offsetTag = css`
  position: absolute;
  transform: translateY(-10rem);
`

const heading = css`
  margin-top: ${spacing(1)};
  display: flex;
  transition: all 0.3s ease-out;
`

const inlineTag = css`
  font-size: ${spacing(2)} !important;
  margin-left: ${spacing(3)};
  align-self: flex-end;
  animation-delay: 2s;
`

const RightContent = styled.div`
  z-index: 4;

  ${bp.to('sm')} {
    flex-direction: column;
    align-items: center;
    z-index: -1;
  }
`

const Row = styled.div`
  display: flex;

  ${bp.to('sm')} {
    flex-direction: column;
    align-items: center;
  }
`

const LeftContent = styled.div`
  z-index: 5;
  margin-bottom: 10%;

  ${bp.to('sm')} {
    margin-top: 10%;
  }
`

const Container = styled.div``

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 0 100%;
  justify-content: center;
  min-height: 100%;
  overflow: hidden;
  padding: ${spacing(6)} 0;

  ${bp.to('sm')} {
    justify-content: flex-start;
  }
`

const Tag = styled(Typograhy)<StyledComponent>`
  color: ${props => props.theme.textSecondary};
  display: block;
`

export default HomePage
