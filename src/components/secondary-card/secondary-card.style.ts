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
  width: 250px;
  height: 140px;
  background: #fff;
  border-radius: 0.2rem;
  margin: 0.8rem;
  position: relative;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const Title = styled.p`
  color: #282828;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const Text = styled.p`
  font-weight: 200;
  color: #484848;
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
  font-size: 0.8rem;
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
  color: #484848;
  font-size: 0.9rem;
  margin-left: 0.4rem;
  text-transform: capitalize;
`;
