import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from '@emotion/styled'

const SidebarContainer = styled(animated.nav)(({ theme }) => {
  return {
    display: 'flex',
    height: '100%',
    backgroundColor: theme.palette.backgroundSecondary,
  }
})

type SidebarProps = {
  expanded?: boolean
  children?: React.ReactNode
}

const Sidebar = ({ expanded, ...otherProps }: SidebarProps) => {
  const styles = useSpring({ width: expanded ? 200 : 68 })

  return <SidebarContainer {...otherProps} style={styles} />
}

export default Sidebar
