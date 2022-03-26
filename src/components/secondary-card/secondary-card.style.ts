import styled from "styled-components";

interface PropsScore {
  positionUp: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.cardShadow};
  width: 190px;
  height: 110px;
  background: ${({ theme }) => theme.cardBackgroundColor};
  border-radius: 0.2rem;
  margin: 0.7rem;
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.cardBackgroundColorHover};
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.cardShadowHover};
    transform: scale(1.02);
    border: 1px solid #fff;
  }

  @media screen and (max-width: 480px) {
    width: 85%;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 0.9rem 0.9rem;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.cardMainTitle};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Text = styled.p`
  font-weight: 200;
  font-size: 1rem;
  text-transform: capitalize;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Score = styled.p<PropsScore>`
  font-weight: 200;
  color: ${({ positionUp, theme }) =>
    positionUp ? theme.scoreColorUp : theme.scoreColorDown};
  font-size: 0.7rem;
  margin-left: 0.2rem;
  text-transform: capitalize;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Social = styled.p`
  font-weight: 200;
  font-size: 0.7rem;
  margin-left: 0.4rem;
  text-transform: capitalize;
`;
