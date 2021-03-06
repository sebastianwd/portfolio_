/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { Typograhy, Button } from '@components'
import styled from '@emotion/styled'
import axios from 'axios'
import { useTheme } from 'emotion-theming'
import qs from 'querystring'
import { StyledComponent, Theme, spacing, bp } from '@theme'
import { css } from '@emotion/core'

const actionUrl =
  'https://script.google.com/macros/s/AKfycbwS1NBUrkPWEEt0MEe_4SoP7yjpuSTBBR8f-0eZMA/exec'

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}

const ContactPage = () => {
  const theme: Theme = useTheme()

  const [formState, setFormState] = useState({})

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()

    try {
      await axios.post(actionUrl, qs.stringify(formState), config)

      alert('Message sent')
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget

    setFormState(state => ({
      ...state,
      [name]: value,
    }))
  }

  return (
    <Section>
      <div className="container">
        <LeftContent className="col-md-12 col-lg-7">
          <Typograhy as="h2" weight="bold" color={theme.primary} size={13}>
            Contact /&gt;
          </Typograhy>
          <Form onSubmit={handleSubmit} className="row m-0 gform" method="POST">
            <input
              id="honeypot"
              type="text"
              name="honeypot"
              onChange={handleChange}
              value=""
              aria-hidden="true"
            />
            <div className="col-md-12 pr-lg-4 p-0 col-lg-6 animated fadeInUp fast">
              <InputWrapper>
                <input
                  type="text"
                  name="name"
                  required
                  id="name"
                  onChange={handleChange}
                />
                <label htmlFor="name">Nombre</label>
                <FocusBorder />
              </InputWrapper>
            </div>
            <div className="col-md-12 p-0 col-lg-6 animated fadeInUp fast">
              <InputWrapper>
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  onChange={handleChange}
                />
                <label htmlFor="email">E-mail</label>
                <FocusBorder />
              </InputWrapper>
            </div>
            <div className="col-12  p-0  animated fadeInUp fast">
              <InputWrapper>
                <input
                  type="text"
                  required
                  name="subject"
                  id="subject"
                  onChange={handleChange}
                />
                <label htmlFor="subject">Asunto</label>
                <FocusBorder />
              </InputWrapper>
            </div>
            <div className="col-12 p-0 animated fadeInUp fast">
              <InputWrapper>
                <textarea
                  onChange={handleChange}
                  required
                  id="message"
                  name="message"
                  style={{ resize: 'none' }}
                />
                <label htmlFor="message">Mensaje</label>
                <FocusBorder />
              </InputWrapper>
            </div>
            <div className="col-12 ml-auto p-0  mt-4 animated fadeIn delay-1s">
              <Button type="submit" disabled={loading}>
                send
              </Button>
            </div>
          </Form>
        </LeftContent>
      </div>
    </Section>
  )
}

const delayChild = (index: number) =>
  css`
    > :nth-of-type(${index}) {
      animation-delay: ${`0.${index}s`};
    }
  `

const Form = styled.form<StyledComponent>`
  width: 100%;

  ${delayChild(1)}
  ${delayChild(2)}
  ${delayChild(3)}
  ${delayChild(4)}
`

const FocusBorder = styled.div<StyledComponent>`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #3399ff;
  transition: 0.4s;
`

const LeftContent = styled.div`
  margin-bottom: 6%;

  ${bp.to('sm')} {
    margin-top: 10%;
  }
`

const InputWrapper = styled.div<StyledComponent>`
  margin: ${spacing(1)} 0;
  position: relative;
  border-radius: 4px;
  width: 100%;

  input:focus ~ ${FocusBorder}, textarea:focus ~ ${FocusBorder} {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }

  label {
    font-size: 1.4em;
    color: #999;
    padding: 0.7rem 30px 1rem 27px;
    position: absolute;
    top: 10px;
    left: 0;
    transition: all 0.25s ease;
    pointer-events: none;
  }
`

const Section = styled.section<StyledComponent>`
  max-width: ${spacing(200)};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding: ${spacing(6)} 0;

  ${bp.to('sm')} {
    justify-content: flex-start;
  }

  #honeypot {
    display: none;
    opacity: 0;
  }

  input:focus ~ label,
  textarea:focus ~ label,
  input:valid ~ label,
  textarea:valid ~ label {
    font-size: 1rem;
    color: #999;
    top: -5px;
    transition: all 0.225s ease;
  }

  input,
  textarea {
    padding: 20px;
    border: 0;
    width: 100%;
    background-color: #2d2d2d;
    color: ${props => props.theme.textPrimary};
    border-radius: 4px;
    font-size: 1.5rem;
  }

  input:focus,
  textarea:focus {
    outline: 0;
  }

  textarea {
    width: 100%;
    min-height: 15em;
  }

  input:invalid,
  textarea:invalid {
    box-shadow: none;
  }

  #contactForm.submitted .styled-input input:invalid ~ .focus-border,
  #contactForm.submitted .styled-input textarea:invalid ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    left: 0;
    background-color: red;
  }
`

export default ContactPage
