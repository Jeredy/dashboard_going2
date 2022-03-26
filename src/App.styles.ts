import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.backgroundColor};
  position: relative;
  padding: 1.5rem 0rem 3rem 0rem;

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

  @media screen and (max-width: 600px) {
    padding: 1.5rem 0rem 3rem 0rem;
  }
`;
