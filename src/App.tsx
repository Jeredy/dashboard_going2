import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Container } from "./App.styles";
import CardPreview from "./components/cards-preview/cards-preview.components";
import { CardModel } from "./models/cardModel";
import { MAIN_CARDS } from "./data/cards";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  const [mainCards, setMainCards] = React.useState<CardModel[]>(MAIN_CARDS);

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

    const items = reorder(mainCards, source.index, destination.index);

    setMainCards(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <GlobalStyles />
      <Container>
        <CardPreview cards={mainCards} setMainCards={setMainCards} />
      </Container>
    </DragDropContext>
  );
};

export default App;
