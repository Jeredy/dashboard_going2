import { DropResult } from "react-beautiful-dnd";
import { CardModel } from "../components/@models/card-model";
import { PropsContext } from "../components/@types/context";

export const reorder = (
  list: CardModel[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const onDragEnd = (result: DropResult, context: PropsContext) => {
  const { source, destination } = result;

  if (!destination) return;

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
    return;

  const editData =
    source.droppableId === "mainCards"
      ? context.mainCards
      : source.droppableId === "secondaryCards_one"
      ? context.secondaryCardsOne
      : context.secondaryCardsTwo;

  const items = reorder(editData, source.index, destination.index);

  /* ORDERING DATA HORIZONTALLY */
  if (source.droppableId === "mainCards") {
    return context.setMainCards?.(items);
  }

  if (
    source.droppableId === "secondaryCards_one" &&
    destination.droppableId === "secondaryCards_one"
  ) {
    return context.setSecondaryCardsOne?.(items);
  }

  if (
    source.droppableId === "secondaryCards_two" &&
    destination.droppableId === "secondaryCards_two"
  ) {
    return context.setSecondaryCardsTwo?.(items);
  }

  /* ORDERING DATA VERTICALLY*/
  let add,
    dataOne = context.secondaryCardsOne,
    dataTwo = context.secondaryCardsTwo;

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

  context.setSecondaryCardsOne?.(dataOne);
  context.setSecondaryCardsTwo?.(dataTwo);
};
