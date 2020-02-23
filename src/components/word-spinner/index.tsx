import React from 'react'
import { map } from 'lodash'
import { Typograhy } from '@components'
import styled from '@emotion/styled'
import { rhythm } from '@theme/typography'

interface Item {
  value: string
  filename?: string
}

interface Props {
  items: Array<Item>
}

const WordSpinner = (props: Props) => {
  const { items } = props

  const renderLabel = (item: Item, index: number) => {
    const { value, filename } = item

    return (
      <Inner as="span" key={index}>
        <Item as="span">
          {filename && <Icon src={require(`@images/${filename}`)} alt="" />}
          <Typograhy as="span" variant="secondary" size={7}>
            {value}
          </Typograhy>
        </Item>
      </Inner>
    )
  }

  return <>{map(items, renderLabel)}</>
}

const Icon = styled.img`
  margin: 0 6px;
`

const Inner = styled(Typograhy)`
  height: ${rhythm(1)};
  display: inline-block;
  vertical-align: top;
`

const Item = styled(Typograhy)`
  display: inline-flex;
`

export default WordSpinner
