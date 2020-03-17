/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { Typograhy, Button } from '@components'
import styled from '@emotion/styled'
import axios from 'axios'
import { useTheme } from 'emotion-theming'
import { StyledComponent, Theme, spacing } from '@theme'

const actionUrl =
  'https://script.google.com/macros/s/AKfycbwS1NBUrkPWEEt0MEe_4SoP7yjpuSTBBR8f-0eZMA/exec'
const ContactPage = () => {
  const theme: Theme = useTheme()

  const [formState, setFormState] = useState({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await axios.post(actionUrl, formState)
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ [e.currentTarget.name]: e.currentTarget.value })
  }

  return (
    <Section>
      <div className="container">
        <LeftContent className="col-sm-7 col-md-6">
          <Typograhy as="h2" weight="bold" color={theme.primary} size={13}>
            Contact /&gt;
          </Typograhy>
          <Form onSubmit={handleSubmit} className="row" method="POST">
            <input
              id="honeypots"
              type="text"
              name="honeypot"
              onChange={handleChange}
              value=""
              aria-hidden="true"
            />
            <div className="col-md-6 col-sm-12">
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
            <div className="col-md-6 col-sm-12">
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
            <div className="col-xs-12 col-md-12">
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
            <div className="col-xs-12 col-md-12">
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
            <div className="col-12 ml-auto mt-4">
              <Button type="submit" id="sendMessage">
                send
              </Button>
            </div>
          </Form>
        </LeftContent>
      </div>
    </Section>
  )
}

const Form = styled.form<StyledComponent>`
  width: 100%;
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

const LeftContent = styled.div``

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
  padding: 6rem 0;

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
