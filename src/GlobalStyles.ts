import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: .9rem;
        overflow-x: hidden;
                
        p, h1 {
            color: ${({ theme }) => theme.cardText};
            text-shadow: 0px 1px 3px rgba(94.1, 95.3, 98, 0.17);
        }

        /* SCROLL */

        /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #dedede;
          border-radius: 2px;

          &:hover {
            background: #aeaeae;
          }
        }
    }
`;
export default GlobalStyles;
