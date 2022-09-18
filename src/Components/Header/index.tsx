import React from 'react'
import styled from '@emotion/styled'
import { FiMenu } from 'react-icons/fi'
import Breadcrumbs from "../Breadcrumbs";
import { Tab } from '../Tab';

const BaseHeader = styled.div(({ theme: { utils, palette } }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 48,
  backgroundColor: palette.backgroundSecondary,
  borderRadius: 'inherit',
}))

const SidebarToggleButton = styled(Tab)(({ theme: { utils } }) => ({
  paddingLeft: utils.getModule(3),
  paddingRight: utils.getModule(3),
}));


const Header = () => {
  return (
    <BaseHeader>
      <SidebarToggleButton role="button">
        <FiMenu size={20} style={{ zIndex: 1 }}/>
      </SidebarToggleButton>
      <Breadcrumbs/>
    </BaseHeader>
  )
}

export default Header
