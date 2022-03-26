import styled, { css } from "styled-components/macro";

const defaultText = css`
  font-weight: 200;
  font-size: 0.7rem;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 830px;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.headerTitle};
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`;

export const Text = styled.p`
  ${defaultText}
`;

export const TextTheme = styled.p`
  ${defaultText}
  color: ${({ theme }) => theme.textTheme};
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 8.5rem;
`;
