import React from 'react'
import styled from '@emotion/styled'
import { animated, useSpring } from 'react-spring'

const Backdrop = styled(animated.div)(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0 ,0, 0.66)',
  opacity: 0,
  zIndex: 999,
}))

type ModalProps = {
  disableBackdrop?: boolean
  children?: React.ReactNode
  header?: string
  isOpen?: boolean
  onClose?(): void
}

const BaseModal = styled(animated.div)(({ theme: { palette, utils } }) => ({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  minHeight: 200,
  minWidth: 300,
  backgroundColor: palette.backgroundSecondary,
  borderRadius: utils.getBorderRadius(2.5),
  opacity: 0,
  zIndex: 1000,
}))

const ModalHeader = styled.div(({ theme: { utils } }) => ({
  padding: `${utils.getModule(1.5)}px ${utils.getModule(2)}px`,
  borderBottom: '1px solid grey',
  fontSize: 18,
}))

const ModalContent = styled.div(({ theme: { utils } }) => ({
  padding: utils.getModule(2),
}))

const Modal = ({
  disableBackdrop,
  children,
  header,
  isOpen,
  onClose,
  ...otherProps
}: ModalProps) => {
  const styles = useSpring({ opacity: isOpen ? 1 : 0 })

  return (
    isOpen ? (
      <>
        {!disableBackdrop && <Backdrop style={styles} onClick={onClose} />}
        <BaseModal style={styles} {...otherProps}>
          {header && <ModalHeader>{header}</ModalHeader>}
          <ModalContent>{children}</ModalContent>
        </BaseModal>
      </>
    ) : null
  )
}

export default Modal
