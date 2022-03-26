import React from "react";
import { Droppable } from "react-beautiful-dnd";

import {
  Container,
  CardsContainer,
  TitleContainer,
  Title,
} from "./secondary-cards-preview.style";
import SecondaryCard from "../secondary-card/secondary-card.component";
import { CardModel } from "../../models/cardModel";
import { Context } from "../context/context";

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
      <TitleContainer>
        <Title>Overview Today</Title>
      </TitleContainer>
      <Droppable
        droppableId="secondaryCards_one"
        direction={window.innerWidth > 600 ? "horizontal" : "vertical"}
      >
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
      <Droppable
        droppableId="secondaryCards_two"
        direction={window.innerWidth > 600 ? "horizontal" : "vertical"}
      >
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
