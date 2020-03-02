import React, { useCallback, memo } from 'react'
import Typograhy, { TypographyProps } from '../typography'
import Delay from '../delay'

interface WordAnimatorProps extends TypographyProps {
  delay: number
  words: string
}

interface CharacterProps {
  char: string
}

const Character = memo((props: CharacterProps) => {
  const { char } = props

  const animation = 'animated bounceIn'

  const toggleAnimation = useCallback(
    (
      isHovered: boolean,
      e:
        | React.AnimationEvent<HTMLSpanElement>
        | React.MouseEvent<HTMLSpanElement>
    ) => {
      const target = e.currentTarget

      if (!target) {
        return
      }

      if (!isHovered) {
        target.classList.remove('animated', 'bounceIn', 'rubberBand')
      } else {
        target.classList.remove('animated', 'bounceIn', 'rubberBand')
        target.classList.add('animated', 'rubberBand')
      }
    },
    []
  )

  return (
    <Typograhy
      as="span"
      aria-hidden="true"
      className={animation}
      onAnimationEnd={e => toggleAnimation(false, e)}
      onMouseEnter={e => toggleAnimation(true, e)}
    >
      {char}
    </Typograhy>
  )
})

Character.displayName = 'Character'

const WordAnimator = (props: WordAnimatorProps) => {
  const { delay, words, children, ...rest } = props

  return (
    <Typograhy {...rest} aria-label={words}>
      {words.split('').map((character, index) => {
        return (
          <Delay waitBeforeShow={index * delay} key={String(index)}>
            <Character char={character === ' ' ? `\u00A0` : character} />
          </Delay>
        )
      })}
      {children}
    </Typograhy>
  )
}

export default WordAnimator
