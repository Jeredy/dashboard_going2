import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CardModel } from "../../models/cardModel";

import { ReactComponent as ReactLogoUp } from "../../assets/images/icon-up.svg";
import { ReactComponent as ReactLogoDown } from "../../assets/images/icon-down.svg";
import { FacebookIcon } from "../icons/facebook";
import icons from "../icons";

import {
  Container,
  Title,
  Text,
  ScoreContainer,
  Score,
  SocialContainer,
  Social,
} from "./main-card.style";

interface Props {
  card: CardModel;
  index: number;
  setMainCards: React.Dispatch<React.SetStateAction<CardModel[]>>;
}

const MainCard: React.FC<Props> = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id.toString()} index={index} key={card.id}>
      {(provided) => (
        <Container
          color={card.color}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Title>{card.title}</Title>
          <Text>Followers</Text>
          <SocialContainer>
            {icons(card.icon)}
            <Social>{card.link}</Social>
          </SocialContainer>
          <ScoreContainer>
            {card.positionUp ? <ReactLogoUp /> : <ReactLogoDown />}

            <Score positionUp={card.positionUp}>{card.score}</Score>
          </ScoreContainer>
        </Container>
      )}
    </Draggable>
  );
};

export default MainCard;
