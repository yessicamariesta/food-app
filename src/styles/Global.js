import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   @font-face {
      font-family: "Proxima-Nova-Bold";
      src: url("/fonts/Proxima-Nova-Bold.otf");
      font-display: swap;
   }

   @font-face {
      font-family: "Proxima-Nova-Reg";
      src: url("/fonts/Proxima-Nova-Reg.otf");
      font-display: swap;
   }

   @font-face {
      font-family: "Proxima-Nova-SemiBold";
      src: url("/fonts/Proxima-Nova-Semibold.otf");
      font-display: swap;
   }

   * {
    box-sizing: border-box;
   }

   html, body {
      padding: 0;
      margin: 0;
      user-select: none;

      font-family: "Proxima-Nova-Reg", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
   }

   img {
      width: 100%;  }
`

export default GlobalStyles
