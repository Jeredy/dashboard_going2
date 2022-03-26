import React from "react";
import { Droppable } from "react-beautiful-dnd";

import {
  Container,
  CardsContainer,
  Title,
} from "./secondary-cards-preview.style";
import SecondaryCard from "../secondary-card/secondary-card.component";
import { CardModel } from "../../models/cardModel";

interface Props {
  cardsOne: CardModel[];
  cardsTwo: CardModel[];
  setSecondaryCardsOne: React.Dispatch<React.SetStateAction<CardModel[]>>;
  setSecondaryCardsTwo: React.Dispatch<React.SetStateAction<CardModel[]>>;
}

const SecondaryCardsPreview: React.FC<Props> = ({
  cardsOne,
  cardsTwo,
  setSecondaryCardsOne,
  setSecondaryCardsTwo,
}) => {
  return (
    <Container>
      <Title> Overview Today</Title>
      <Droppable droppableId="secondaryCards_one" direction="horizontal">
        {(provided) => (
          <CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
            {cardsOne.map((data, index) => (
              <SecondaryCard
                card={data}
                index={index}
                setSecondaryCards={setSecondaryCardsOne}
              />
            ))}
            {/* {provided.placeholder} */}
          </CardsContainer>
        )}
      </Droppable>
      <Droppable droppableId="secondaryCards_two" direction="horizontal">
        {(provided) => (
          <CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
            {cardsTwo.map((data, index) => (
              <SecondaryCard
                card={data}
                index={index}
                setSecondaryCards={setSecondaryCardsTwo}
              />
            ))}
            {/* {provided.placeholder} */}
          </CardsContainer>
        )}
      </Droppable>
    </Container>
  );
};

export default SecondaryCardsPreview;
