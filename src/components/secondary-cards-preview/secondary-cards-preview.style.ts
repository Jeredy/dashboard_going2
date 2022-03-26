import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  align-items: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin: 0.2rem 0rem 0.5rem 0rem;
  width: 100%;
  padding-left: .6rem;

  @media screen and (max-width: 865px) {
    width: 85%;
  }
`;

export const Title = styled.p`
  margin-right: auto;
  font-weight: 700;
  font-size: 1rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.textTheme};
`;
