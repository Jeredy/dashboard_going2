import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { Container, CardsContainer } from "./main-cards-preview.style";
import MainCard from "../main-card/main-card.component";
import { CardModel } from "../../models/cardModel";
import { Context } from "../context/context";

interface Props {
  cards: CardModel[];
  setMainCards: React.Dispatch<React.SetStateAction<CardModel[]>>;
}

const MainCardsPreview: React.FC<Props> = ({ cards, setMainCards }) => {
  return (
    <Container>
      <Droppable
        droppableId="mainCards"
        direction={window.innerWidth > 600 ? "horizontal" : "vertical"}
      >
        {(provided) => (
          <CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((data, index) => (
              <MainCard card={data} index={index} setMainCards={setMainCards} />
            ))}
            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </Container>
  );
};

export default MainCardsPreview;
