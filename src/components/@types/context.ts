import { CardModel } from "../@models/card-model";

export interface PropsContext {
  theme: boolean;
  mainCards: CardModel[];
  secondaryCardsOne: CardModel[];
  secondaryCardsTwo: CardModel[];
  toggleTheme?: () => void;
  setMainCards?: (data: CardModel[]) => void;
  setSecondaryCardsOne?: (data: CardModel[]) => void;
  setSecondaryCardsTwo?: (data: CardModel[]) => void;
}

export interface PropsState {
  theme: boolean;
  mainCards: CardModel[];
  secondaryCardsOne: CardModel[];
  secondaryCardsTwo: CardModel[];
}

export interface PropsAction {
  type: Types;
  payload?: CardModel[];
}

export enum Types {
  TOGGLE_THEME = "TOGGLE_THEME",
  SET_MAIN_CARDS = "SET_MAIN_CARDS",
  SET_SECONDARY_CARDS_ONE = "SET_SECONDARY_CARDS_ONE",
  SET_SECONDARY_CARDS_TWO = "SET_SECONDARY_CARDS_TWO",
}

export interface LayoutProps {
  children: React.ReactNode;
}
