import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from '@emotion/styled'

const BaseBackdrop = styled(animated.div)(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0 ,0, 0.66)',
  zIndex: 999,
}))

const Backdrop = ({ ...otherProps }) => {

  const styles = useSpring({
    opacity: 1,
    config: {
      duration: 2000
    }
  })

  return <BaseBackdrop style={styles} {...otherProps} />
}

export default Backdrop
