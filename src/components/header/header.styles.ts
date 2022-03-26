import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 830px;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 700;
  color: #44474e;
  font-size: 1.5rem;
  margin-bottom: .2rem
`;

export const Text = styled.p`
  font-weight: 200;
  font-size: 0.8rem;
  text-transform: uppercase;
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
  width: 9rem;
`;
