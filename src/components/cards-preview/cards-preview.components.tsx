import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { Container, CardsContainer, Title } from "./cards-preview.style";
import Card from "../card/card.component";
import { CardModel } from "../../models/cardModel";

interface Props {
  cards: CardModel[];
  setMainCards: React.Dispatch<React.SetStateAction<CardModel[]>>;
}

const CardsPreview: React.FC<Props> = ({ cards, setMainCards }) => {
  return (
    <Container>
      <Title>Main Cards</Title>
      <Droppable droppableId="mainCards" direction="horizontal">
        {(provided) => (
          <CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((data, index) => (
              <Card card={data} index={index} setMainCards={setMainCards} />
            ))}
            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </Container>
  );
};

export default CardsPreview;
