import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.backgroundColor};
  position: relative;

  &:before {
    content: "";
    z-index: 0;
    display: flex;
    height: 200px;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.backgroundColorBefore};
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
`;
