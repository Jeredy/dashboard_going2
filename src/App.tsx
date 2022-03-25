import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Container } from "./App.styles";
import MainCardsPreview from "./components/main-cards-preview/main-cards-preview.components";
import SecondaryCardsPreview from "./components/secondary-cards-preview/secondary-cards-preview.components";

import { CardModel } from "./models/cardModel";
import {
  MAIN_CARDS,
  SECONDARY_CARDS_ONE,
  SECONDARY_CARDS_TWO,
} from "./data/cards";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  const [mainCards, setMainCards] = React.useState<CardModel[]>(MAIN_CARDS);
  const [secondaryCardsOne, setSecondaryCardsOne] =
    React.useState<CardModel[]>(SECONDARY_CARDS_ONE);
  const [secondaryCardsTwo, setSecondaryCardsTwo] =
    React.useState<CardModel[]>(SECONDARY_CARDS_TWO);

  const reorder = (list: CardModel[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const editData =
      source.droppableId === "mainCards"
        ? mainCards
        : source.droppableId === "secondaryCards_one"
        ? secondaryCardsOne
        : secondaryCardsTwo;

    const items = reorder(editData, source.index, destination.index);

    /* ORDERING DATA HORIZONTALY */
    if (source.droppableId === "mainCards") {
      return setMainCards(items);
    }

    if (
      source.droppableId === "secondaryCards_one" &&
      destination.droppableId === "secondaryCards_one"
    ) {
      return setSecondaryCardsOne(items);
    }

    if (
      source.droppableId === "secondaryCards_two" &&
      destination.droppableId === "secondaryCards_two"
    ) {
      return setSecondaryCardsTwo(items);
    }

    let add,
      dataOne = secondaryCardsOne,
      dataTwo = secondaryCardsTwo;

    if (source.droppableId === "secondaryCards_one") {
      /*remove the source index from dataOne*/
      add = dataOne[source.index];
      dataOne.splice(source.index, 1);
    } else {
      add = dataTwo[source.index];
      dataTwo.splice(source.index, 1);
    }

    if (destination.droppableId === "secondaryCards_one") {
      /*add the data on specific destination index*/
      dataOne.splice(destination.index, 0, add);
      /*add it to first data on dataTwo remove the last data from dataOne*/
      dataTwo.splice(0, 0, dataOne[dataOne.length - 1]);
      dataOne.splice(dataOne.length - 1, 1);
    } else {
      dataTwo.splice(destination.index, 0, add);
      /*add it to first data on dataOne remove the last data from dataTwo*/
      dataOne.splice(0, 0, dataTwo[dataTwo.length - 1]);
      dataTwo.splice(dataTwo.length - 1, 1);
    }

    setSecondaryCardsOne(dataOne);
    setSecondaryCardsTwo(dataTwo);
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <GlobalStyles />
      <Container>
        <MainCardsPreview cards={mainCards} setMainCards={setMainCards} />
        <SecondaryCardsPreview
          cardsOne={secondaryCardsOne}
          setSecondaryCardsOne={setSecondaryCardsOne}
          cardsTwo={secondaryCardsTwo}
          setSecondaryCardsTwo={setSecondaryCardsTwo}
        />
      </Container>
    </DragDropContext>
  );
};

export default App;
