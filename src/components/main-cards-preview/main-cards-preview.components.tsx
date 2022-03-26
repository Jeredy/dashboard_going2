import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { Container, CardsContainer } from "./main-cards-preview.style";
import MainCard from "../main-card/main-card.component";
import { Context } from "../context/context";

const MainCardsPreview: React.FC = () => {
  const { mainCards } = React.useContext(Context);

  return (
    <Container>
      <Droppable
        droppableId="mainCards"
        direction={window.innerWidth > 600 ? "horizontal" : "vertical"}
      >
        {(provided) => (
          <CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
            {mainCards.map((data, index) => (
              <MainCard card={data} index={index} key={index} />
            ))}
            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </Container>
  );
};

export default MainCardsPreview;
