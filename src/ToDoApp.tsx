import { useState } from 'react'
import styled from '@emotion/styled'
import Layout from './Components/Layout'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

const Main = styled.main(() => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
}))

const ToDoApp = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState<boolean>(false)

  return (
    <Layout>
      <Header sidebarToggle={() => setSidebarExpanded(!isSidebarExpanded)} />
      <Main>
        <Sidebar expanded={isSidebarExpanded}>Sidebar</Sidebar>
        <main>Main</main>
      </Main>
    </Layout>
  )
}

export default ToDoApp
