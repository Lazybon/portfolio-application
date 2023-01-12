import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FiMenu, FiPlus } from 'react-icons/fi'
import Breadcrumbs from '../Breadcrumbs'
import { Tab, type TabProps } from '../Tab'
import Control from '../Control'
import Portal from '../Portal'
import Modal from '../Modal'
import Input from '../Input'

const BaseHeader = styled.header(({ theme: { utils, palette } }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 48,
  backgroundColor: palette.backgroundSecondary,
  borderRadius: 'inherit',
}))

const SidebarToggleButton = styled(Tab)<TabProps>(({ theme: { utils } }) => ({
  paddingLeft: utils.getModule(3),
  paddingRight: utils.getModule(3),
}))

const HeaderControls = styled.div(({ theme: { utils } }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 'auto',
  paddingRight: utils.getModule(3),
}))

type HeaderProps = {
  sidebarToggle?(): void
}

const Header = ({ sidebarToggle }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <BaseHeader>
        <SidebarToggleButton onClick={sidebarToggle} role="button">
          <FiMenu size={20} style={{ zIndex: 1 }} />
        </SidebarToggleButton>
        <Breadcrumbs />
        <HeaderControls>
          <Control
            onClick={() => setIsOpen(true)}
            size="small"
            icon={<FiPlus color="#FFFFFF" />}
            style={{
              background:
                'linear-gradient(45deg, #f09433 0%,#e6683c 15%,#dc2743 50%,#cc2366 65%,#bc1888 100%)',
            }}
          />
        </HeaderControls>
      </BaseHeader>
      <Portal>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          header="Create a new list"
        >
          <Input control={<Control />}/>
        </Modal>
      </Portal>
    </>
  )
}

export default Header
