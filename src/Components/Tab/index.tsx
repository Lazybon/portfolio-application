import styled from '@emotion/styled'
import React from 'react'

export const BaseTab = styled.div(({ theme: { utils, palette } }) => ({
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  paddingLeft: utils.getModule(1.5),
  paddingRight: utils.getModule(1.5),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    transition: 'background 300ms',
  },
  '&:hover::before': {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
  },
  '&:active::before': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '& > * + *': {
    marginLeft: utils.getModule(1),
  },
}))

interface Tab {
  children?: React.ReactNode
  text?: string
  textStyleProps?: React.CSSProperties
}

export const Tab = ({ children, text, textStyleProps, ...otherProps }: Tab) => {
  return (
    <BaseTab {...otherProps}>
      {children}
      {text && <p style={{ ...textStyleProps }}>{text}</p>}
    </BaseTab>
  )
}
