import { Fragment } from 'react'
import { Global, css, CacheProvider, ThemeProvider } from '@emotion/react'
import createCache, { Options } from '@emotion/cache'
import ToDoApp from './ToDoApp'
import * as utils from './config/utils'
import * as palette from './config/palette'
import 'sanitize.css'

const theme = {
  utils,
  palette,
}

function App() {
  const emotionCache = createCache({
    key: 'react-to-do',
    prepend: true,
  } as Options)

  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
          }

          body {
            color: ${theme.palette.textPrimary};
            overflow: hidden;
          }

          svg {
            line-height: 16px;
          }
        `}
      />
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <ToDoApp />
        </ThemeProvider>
      </CacheProvider>
    </Fragment>
  )
}

export default App
