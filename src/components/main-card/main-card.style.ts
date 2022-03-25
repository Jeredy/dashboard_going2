import styled from "styled-components";

interface PropsScore {
  positionUp: boolean;
}

interface PropsContainer {
  color: string;
}

export const Container = styled.div<PropsContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.6);
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 0.2rem;
  margin: 0.8rem;
  position: relative;

  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 0.28rem;
    position: absolute;
    background: ${({ color }) => color ?? "#fff"};
    top: 0;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  color: #282828;
  font-size: 2.7rem;
`;

export const Text = styled.p`
  font-weight: 200;
  color: #484848;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const ScoreContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 1.5rem;
  align-items: center;
`;

export const Score = styled.p<PropsScore>`
  color: ${({ positionUp }) => (positionUp ? "green" : "red")};
  font-size: 0.8rem;
  margin-left: 0.2rem;
  text-transform: capitalize;
`;

export const SocialContainer = styled.div`
  display: flex;
  position: absolute;
  top: 1.5rem;
  align-items: center;
`;

export const Social = styled.p`
  font-weight: 200;
  color: #484848;
  font-size: 0.9rem;
  margin-left: 0.4rem;
  text-transform: capitalize;
`;
