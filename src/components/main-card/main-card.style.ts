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
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  width: 190px;
  height: 170px;
  background: #f0f3fa;
  border-radius: 0.2rem;
  margin: 0.7rem;
  position: relative;

  &:hover {
    background: #e1e3f0;
    cursor: pointer;
    box-shadow: 0px 1px 5px rgba(94.1, 95.3, 98, 0.4);
    transform: scale(1.02);
    border: 1px solid #fff;
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
`;

export const Title = styled.p`
  font-weight: 700;
  color: #21242d;
  font-size: 2.7rem; 
`;

export const Text = styled.p`
  font-weight: 200;
  font-size: .8rem;
  text-transform: uppercase;
`;

export const ScoreContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 1.2rem;
  align-items: center;
`;

export const Score = styled.p<PropsScore>`
  color: ${({ positionUp }) => (positionUp ? "green" : "red")};
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
