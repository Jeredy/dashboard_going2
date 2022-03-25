import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { Container, CardsContainer, Title } from "./secondary-cards-preview.style";
import SecondaryCard from "../secondary-card/secondary-card.component";
import { CardModel } from "../../models/cardModel";

interface Props {
  cards: CardModel[];
  setSecondaryCards: React.Dispatch<React.SetStateAction<CardModel[]>>;
}

const SecondaryCardsPreview: React.FC<Props> = ({ cards, setSecondaryCards }) => {
  return (
    <Container>
      <Droppable droppableId="secondaryCards" direction="horizontal">
        {(provided) => (
          <CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((data, index) => (
              <SecondaryCard card={data} index={index} setSecondaryCards={setSecondaryCards} />
            ))}
            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </Container>
  );
};

export default SecondaryCardsPreview;
