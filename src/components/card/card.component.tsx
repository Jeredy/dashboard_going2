import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CardModel } from "../../models/cardModel";

import { ReactComponent as ReactLogoUp } from "../../assets/images/icon-up.svg";
import { ReactComponent as ReactLogoDown } from "../../assets/images/icon-down.svg";

import { Container, Title, Text, ScoreContainer, Score } from "./card.style";

interface Props {
  card: CardModel;
  index: number;
  setMainCards: React.Dispatch<React.SetStateAction<CardModel[]>>;
}

const Card: React.FC<Props> = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id.toString()} index={index} key={card.id}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Title>{card.title}</Title>
          <Text>Followers</Text>
          <ScoreContainer>
              {card.positionUp ? <ReactLogoUp /> : <ReactLogoDown /> }
            <Score positionUp={card.positionUp}>
              {card.score}
            </Score>
          </ScoreContainer>
        </Container>
      )}
    </Draggable>
  );
};

export default Card;
