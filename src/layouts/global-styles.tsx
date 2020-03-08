import React from 'react'
import { css, Global } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Theme, bp, spacing } from '@theme'

const styles = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  pre code {
    background: none;
    line-height: 1.42;
  }
  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: ' ';
  }
  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: '';
  }

  html {
    box-sizing: border-box;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    &:focus {
      outline: none;
    }
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  b,
  strong {
    font-weight: bolder;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
    margin-bottom: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  html {
    height: 100%;
    overflow: hidden;
  }

  body {
    color: hsla(0, 0%, 0%, 0.8);
    height: 100%;
    font-family: 'Inter', sans-serif;
    word-wrap: break-word;
    overflow: hidden;
    color: ${theme.textPrimary};
    background-color: ${theme.background};
  }

  #___gatsby {
    height: 100%;
    overflow: hidden;
  }

  #gatsby-focus-wrapper {
    height: 100%;
    overflow: hidden;
  }

  a {
    cursor: pointer;
  }

  p {
    padding: 0;
    margin-bottom: 1.5rem;
  }

  h2 {
    padding: 0;
    margin-bottom: 2.5rem;
    color: inherit;
    font-family: 'Inter', 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.1;
  }

  ul {
    margin-left: 2.5rem;
    margin-bottom: 2.5rem;
    padding: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  li {
    margin-bottom: calc(1.5rem / 2);
  }

  p,
  a,
  li,
  label {
    font-size: ${spacing(1.6)};
    line-height: 1.8;
  }

  html {
    font-size: 62.5%;

    ${bp.to('md')} {
      font-size: 56.25%;
    }

    ${bp.to('sm')} {
      font-size: 50%;
    }
  }
`

const GlobalStyles = () => {
  const theme: Theme = useTheme()

  return <Global styles={styles(theme)} />
}

export default GlobalStyles
