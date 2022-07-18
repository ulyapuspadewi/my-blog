import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
      
      a { cursor: pointer; }
      .nav-item.active{
        font-weight: bold;
      }
      hr{
        margin: 2rem 0 1.5rem;
      }
`