import styled from "styled-components";

interface Props {
  toggleTheme: boolean;
}

export const ToggleThemeButton = styled.div<Props>`
  display: flex;
  width: 3.1rem;
  height: 1.39rem;
  border-radius: 5rem;
  background: ${({ toggleTheme }) =>
    toggleTheme
      ? "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
      : "hsl(230, 22%, 74%)"};
  align-items: center;
  position: relative;
  box-shadow: 0px 1px 2px rgba(94.1, 95.3, 98, 0.4);

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: "";
    display: flex;
    position: absolute;
    left: ${({ toggleTheme }) => (toggleTheme ? ".15rem" : "1.89rem")};
    width: 1.1rem;
    height: 1.1rem;
    background: #f0f3fa;
    border-radius: 50%;
    transition: 0.4s ease-in-out;
    box-shadow: 0px 1px 5px rgba(94.1, 95.3, 98, 0.4);
  }
`;

export default ToggleThemeButton;
