import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { ReactComponent as ReactLogoUp } from "../../assets/images/icon-up.svg";
import { ReactComponent as ReactLogoDown } from "../../assets/images/icon-down.svg";
import AreaChartComponent from "../charts/area-chart/area-chart.component";
import { flipCard } from "../../utils/flip-card";
import { Props } from "../@types/main-card";
import icons from "../icons";

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


const MainCard: React.FC<Props> = ({ card, index }) => {
  const [flip, setFlip] = React.useState<boolean>(true);

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
              <FlipContainer onClick={() => flipCard(card, flip, setFlip)}>
                {" "}
                <FlipIcon />
              </FlipContainer>
            </>
          ) : (
            <>
              <AreaChartComponent cardChartData={card.chartData!} />
              <FlipContainer onClick={() => flipCard(card, flip, setFlip)}>
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
