import React from 'react'
import styled, { type StyledTags } from '@emotion/styled'


export type ControlProps = {
  icon?: React.SVGAttributes<SVGElement>
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
}

const BaseControl = styled.div<Pick<ControlProps, 'size'>>(
  ({ theme: { utils }, size }) => {
    let padding

    switch (size) {
      case 'small':
        padding = utils.getModule(0.5)
        break
      case 'medium':
        padding = utils.getModule(1)
        break
      default:
        padding = utils.getModule(1.5)
        break
    }

    return {
      cursor: 'pointer',
      position: 'relative',
      padding,
      lineHeight: '16px',
      borderRadius: utils.getBorderRadius(2),
      '&:before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transition: 'background-color 300ms',
        backgroundColor: 'transparent',
        borderRadius: utils.getBorderRadius(2)
      },
      '&:hover::before': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      },
      '&:active::before': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
      },
      '& > * + *': {
        marginLeft: utils.getModule(1),
      },
    }
  }
)

const Control = ({
  children,
  icon,
  size = 'medium',
  ...otherProps
}: React.HTMLAttributes<HTMLDivElement> & ControlProps) => {
  return (
    // @ts-ignore
    <BaseControl role="button" {...otherProps} size={size}>
      {icon}
      {children}
    </BaseControl>
  )
}

export default Control
