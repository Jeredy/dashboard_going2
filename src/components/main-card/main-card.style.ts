import styled from "styled-components";
import { BiDotsVertical } from "react-icons/bi";

interface PropsScore {
  positionUp: boolean;
}

interface PropsContainer {
  color: string;
  flip: boolean;
}

export const Container = styled.div<PropsContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.cardShadow};
  width: 190px;
  height: 170px;
  background: ${({ theme }) => theme.cardBackgroundColor};
  border-radius: 0.2rem;
  margin: 0.7rem;
  position: relative;
  transition: transform ease-in-out 0.2s;

  &.front {
    transform: rotateY(0deg);
  }

  &.back {
    transform: rotateY(90deg);
  }

  &:hover {
    background: ${({ theme }) => theme.cardBackgroundColorHover};
    box-shadow: ${({ theme }) => theme.cardShadowHover};
    border: 1px solid #ededed;
  }

  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 0.28rem;
    position: absolute;
    background: ${({ color }) => color ?? "#fff"};
    top: 0;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
  }

  @media screen and (max-width: 480px) {
    width: 85%;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.cardMainTitle};
  font-size: 2.7rem;
`;

export const Text = styled.p`
  font-weight: 200;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const ScoreContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 1.2rem;
  align-items: center;
`;

export const Score = styled.p<PropsScore>`
  color: ${({ positionUp, theme }) =>
    positionUp ? theme.scoreColorUp : theme.scoreColorDown};
  font-size: 0.7rem;
  margin-left: 0.2rem;
  text-transform: capitalize;
`;

export const SocialContainer = styled.div`
  display: flex;
  position: absolute;
  top: 1.2rem;
  align-items: center;
`;

export const Social = styled.p`
  font-weight: 400;
  font-size: 0.7rem;
  margin-left: 0.4rem;
  text-transform: capitalize;
`;

export const FlipContainer = styled.div`
  display: flex;
  width: 1.4rem;
  height: 1.4rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0.2rem;
  top: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export const FlipIcon = styled(BiDotsVertical)`
  display: flex;
  height: 1.3rem;
  width: 1.3rem;
  fill: ${({ theme }) => theme.headerTitle};
`;
