import styled from "styled-components";

interface PropsScore {
  positionUp: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  width: 190px;
  height: 110px;
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
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: .9rem .9rem;
  
`;

export const Title = styled.p`
  color: #21242d;
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
  color: ${({ positionUp }) => (positionUp ? "green" : "red")};
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
