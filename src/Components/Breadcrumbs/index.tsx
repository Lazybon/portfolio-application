import React from 'react'
import styled from '@emotion/styled'
import { FiGrid, FiFolder } from 'react-icons/fi'
import { Tab } from '../Tab'

const BaseBreadcrumbs = styled.nav(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  height: '100%'
}))

const Breadcrumbs = () => {
  return (
    <BaseBreadcrumbs>
      <Tab text="Dashboard">
        <FiGrid />
      </Tab>
      <Tab text="Collections">
        <FiFolder />
      </Tab>
    </BaseBreadcrumbs>
  )
}

export default Breadcrumbs
