import styled from "styled-components";

import { Props } from "../@types/button";

export const ToggleThemeButton = styled.div<Props>`
  display: flex;
  width: 3.1rem;
  height: 1.39rem;
  border-radius: 5rem;
  background: ${({ theme }) => theme.toggleButtonColorOff};
  align-items: center;
  position: relative;
  box-shadow: ${({ theme }) => theme.toggleButtonShadow};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.toggleButtonColorOn};
  }

  &:before {
    content: "";
    display: flex;
    position: absolute;
    left: ${({ toggleSide }) => (toggleSide ? "1.89rem" : ".15rem")};
    width: 1.1rem;
    height: 1.1rem;
    background: ${({ theme }) => theme.toggleButtonCircle};
    border-radius: 50%;
    transition: 0.4s ease-in-out;
    box-shadow: 0px 1px 5px rgba(94.1, 95.3, 98, 0.4);
    backdrop-filter: blur(2px);
  }
`;

export default ToggleThemeButton;
