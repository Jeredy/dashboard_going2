import React from "react";
import { Droppable } from "react-beautiful-dnd";

import {
  Container,
  CardsContainer,
  TitleContainer,
  Title,
} from "./secondary-cards-preview.style";
import SecondaryCard from "../secondary-card/secondary-card.component";
import { Context } from "../context/context";

const SecondaryCardsPreview: React.FC = () => {
  const { secondaryCardsOne, secondaryCardsTwo } = React.useContext(Context);

  return (
    <Container>
      <TitleContainer>
        <Title>Overview Today</Title>
      </TitleContainer>
      <Droppable
        droppableId="secondaryCards_one"
        direction={window.innerWidth > 600 ? "horizontal" : "vertical"}
      >
        {(provided) => (
          <CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
            {secondaryCardsOne.map((data, index) => (
              <SecondaryCard card={data} index={index} key={index} />
            ))}
          </CardsContainer>
        )}
      </Droppable>
      <Droppable
        droppableId="secondaryCards_two"
        direction={window.innerWidth > 600 ? "horizontal" : "vertical"}
      >
        {(provided) => (
          <CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
            {secondaryCardsTwo.map((data, index) => (
              <SecondaryCard card={data} index={index} key={index} />
            ))}
          </CardsContainer>
        )}
      </Droppable>
    </Container>
  );
};

export default SecondaryCardsPreview;
