import styled from "styled-components";

interface PropsScore {
  positionUp: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.6);
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 0.3rem;
  margin: 0.8rem;
  position: relative;

  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 0.3rem;
    position: absolute;
    background-image: linear-gradient(90deg, red, blue, black);
    top: 0;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
`;

export const Title = styled.p`
  font-weight: 400;
  color: #282828;
  font-size: 2.3rem;
`;

export const Text = styled.p`
  font-weight: 200;
  color: #484848;
  font-size: 1.9rem;
  text-transform: capitalize;
`;

export const ScoreContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  align-items: center;  
`;

export const Score = styled.p<PropsScore>`
  font-weight: 200;
  color: ${({ positionUp }) => (positionUp ? "green" : "red")};
  font-size: 1.1rem;
  margin-left: .2rem;
  text-transform: capitalize;
`;
