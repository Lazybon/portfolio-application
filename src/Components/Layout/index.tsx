import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

const Overview = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background:
    'linear-gradient(201deg, rgba(248, 76, 111, 1) 0%, rgba(170, 40, 163, 1) 100%)',
})

const BaseLayout = styled.div(({ theme: { utils, palette } }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: palette.backgroundPrimary,
    borderRadius: 0,
    '@media (min-width: 1024px)': {
      width: 1024,
      height: 720,
      borderRadius: utils.getBorderRadius(1),
    },
  }
})

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children, ...otherProps }: LayoutProps) => (
  <Overview>
    <BaseLayout {...otherProps}>{children}</BaseLayout>
  </Overview>
)

export default Layout;
