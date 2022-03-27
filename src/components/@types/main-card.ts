import { CardModel } from "../@models/card-model";

export interface Props {
  card: CardModel;
  index: number;
}

export interface PropsScore {
  positionUp: boolean;
}

export interface PropsContainer {
  color: string;
  flip: boolean;
}
