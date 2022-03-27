import { CardModel } from "../components/@models/card-model";

export const flipCard = (
  card: CardModel,
  flip: boolean,
  setFlip: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const cardClassList = document.querySelector(`.card-${card.id}`)?.classList;
  cardClassList?.add("back");
  setTimeout(() => {
    cardClassList?.remove("back");
    cardClassList?.add("front");
    setFlip(!flip);
  }, 300);
};
