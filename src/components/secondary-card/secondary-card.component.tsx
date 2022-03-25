import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CardModel } from "../../models/cardModel";

import { ReactComponent as ReactLogoUp } from "../../assets/images/icon-up.svg";
import { ReactComponent as ReactLogoDown } from "../../assets/images/icon-down.svg";

import icons from "../icons";

import {
  Container,
  Title,
  Text,
  SubContainer,
  ScoreContainer,
  Score,
  SocialContainer,
  Social,
} from "./secondary-card.style";

interface Props {
  card: CardModel;
  index: number;
  setSecondaryCards: React.Dispatch<React.SetStateAction<CardModel[]>>;
}

const SecondaryCard: React.FC<Props> = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id.toString()} index={index} key={card.id}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <SubContainer>
            <Text>Followers2</Text>
            <SocialContainer>{icons(card.icon)}</SocialContainer>
          </SubContainer>
          <SubContainer>
            <Title>{card.title}</Title>
            <ScoreContainer>
              {card.positionUp ? <ReactLogoUp /> : <ReactLogoDown />}

              <Score positionUp={card.positionUp}>{card.score}</Score>
            </ScoreContainer>
          </SubContainer>
        </Container>
      )}
    </Draggable>
  );
};

export default SecondaryCard;
