import '@emotion/react'
import * as utils from './utils';
import * as paletteTokens from './palette';

declare module '@emotion/react' {
  interface Theme {
    palette: typeof paletteTokens,
    utils: typeof utils,
  }
}

