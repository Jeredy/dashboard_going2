import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Container } from "./App.styles";
import MainCardsPreview from "./components/main-cards-preview/main-cards-preview.components";
import SecondaryCardsPreview from "./components/secondary-cards-preview/secondary-cards-preview.components";

import { CardModel } from "./models/cardModel";
import { MAIN_CARDS, SECONDARY_CARDS } from "./data/cards";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  const [mainCards, setMainCards] = React.useState<CardModel[]>(MAIN_CARDS);
  const [secondaryCards, setSecondaryCards] =
    React.useState<CardModel[]>(SECONDARY_CARDS);

  const reorder = (list: CardModel[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    console.log(result);
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    const editData =
      source.droppableId === "mainCards" ? mainCards : secondaryCards;

    const items = reorder(editData, source.index, destination.index);
    source.droppableId === "mainCards"
      ? setMainCards(items)
      : setSecondaryCards(items);
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <GlobalStyles />
      <Container>
        <MainCardsPreview cards={mainCards} setMainCards={setMainCards} />
        <SecondaryCardsPreview
          cards={secondaryCards}
          setSecondaryCards={setSecondaryCards}
        />
      </Container>
    </DragDropContext>
  );
};

export default App;
