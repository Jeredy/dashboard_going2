import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CardModel } from "../../models/cardModel";

import { ReactComponent as ReactLogoUp } from "../../assets/images/icon-up.svg";
import { ReactComponent as ReactLogoDown } from "../../assets/images/icon-down.svg";
import icons from "../icons";
import AreaChartComponent from "../charts/area-chart/area-chart.component";

import {
  Container,
  Title,
  Text,
  ScoreContainer,
  Score,
  SocialContainer,
  Social,
  FlipContainer,
  FlipIcon,
} from "./main-card.style";

interface Props {
  card: CardModel;
  index: number;
}

const MainCard: React.FC<Props> = ({ card, index }) => {
  const [flip, setFlip] = React.useState<boolean>(true);

  const flipCard = () => {
    const cardClassList = document.querySelector(`.card-${card.id}`)?.classList;
    cardClassList?.add("back");
    setTimeout(() => {
      cardClassList?.remove("back");
      cardClassList?.add("front");
      setFlip(!flip);
    }, 300);
  };

  return (
    <Draggable draggableId={card.id.toString()} index={index} key={card.id}>
      {(provided) => (
        <Container
          className={`card-${card.id}`}
          color={card.color}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          flip={flip}
        >
          {flip ? (
            <>
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
              <FlipContainer onClick={flipCard}>
                {" "}
                <FlipIcon />
              </FlipContainer>
            </>
          ) : (
            <>
              <AreaChartComponent cardChartData={card.chartData!} />
              <FlipContainer onClick={flipCard}>
                {" "}
                <FlipIcon />
              </FlipContainer>
            </>
          )}
        </Container>
      )}
    </Draggable>
  );
};

export default MainCard;
