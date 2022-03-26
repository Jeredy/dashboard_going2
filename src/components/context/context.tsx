import React from "react";
import {
  MAIN_CARDS,
  SECONDARY_CARDS_ONE,
  SECONDARY_CARDS_TWO,
} from "../../data/cards";

import { CardModel } from "../../models/cardModel";

interface PropsContext {
  theme: boolean;
  mainCards: CardModel[];
  secondaryCardsOne: CardModel[];
  secondaryCardsTwo: CardModel[];
  toggleTheme?: () => void;
  setMainCards?: (data: CardModel[]) => void;
  setSecondaryCardsOne?: (data: CardModel[]) => void;
  setSecondaryCardsTwo?: (data: CardModel[]) => void;
}

interface PropsState {
  theme: boolean;
  mainCards: CardModel[];
  secondaryCardsOne: CardModel[];
  secondaryCardsTwo: CardModel[];
}

enum Types {
  TOGGLE_THEME = "TOGGLE_THEME",
  SET_MAIN_CARDS = "SET_MAIN_CARDS",
  SET_SECONDARY_CARDS_ONE = "SET_SECONDARY_CARDS_ONE",
  SET_SECONDARY_CARDS_TWO = "SET_SECONDARY_CARDS_TWO",
}

interface PropsAction {
  type: Types;
  payload?: CardModel[];
}

interface LayoutProps {
  children: React.ReactNode;
}

const INITIAL_STATE: PropsContext = {
  theme: true,
  mainCards: MAIN_CARDS,
  secondaryCardsOne: SECONDARY_CARDS_ONE,
  secondaryCardsTwo: SECONDARY_CARDS_TWO,
};

const Context = React.createContext({
  ...INITIAL_STATE,
});

const Reducer = (state: PropsState, action: PropsAction) => {
  const { type, payload } = action;

  switch (type) {
    case Types.TOGGLE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    case Types.SET_MAIN_CARDS:
      let mainCards = (state.mainCards = payload!);

      return {
        ...state,
        value: mainCards,
      };
    case Types.SET_SECONDARY_CARDS_ONE:
      let secondaryCradsOne = (state.secondaryCardsOne = payload!);

      return {
        ...state,
        value: secondaryCradsOne,
      };
    case Types.SET_SECONDARY_CARDS_TWO:
      let secondaryCradsTwo = (state.secondaryCardsTwo = payload!);

      return {
        ...state,
        value: secondaryCradsTwo,
      };
    default:
      return state;
  }
};

const Provider = (props: LayoutProps) => {
  const [state, dispatch] = React.useReducer(Reducer, INITIAL_STATE);

  const toggleTheme = () => {
    dispatch({
      type: Types.TOGGLE_THEME,
    });
  };

  const setMainCards = (data: CardModel[]) => {
    dispatch({
      type: Types.SET_MAIN_CARDS,
      payload: data,
    });
  };

  const setSecondaryCardsOne = (data: CardModel[]) => {
    dispatch({
      type: Types.SET_SECONDARY_CARDS_ONE,
      payload: data,
    });
  };

  const setSecondaryCardsTwo = (data: CardModel[]) => {
    dispatch({
      type: Types.SET_SECONDARY_CARDS_TWO,
      payload: data,
    });
  };

  return (
    <Context.Provider
      value={{
        theme: state.theme,
        mainCards: state.mainCards,
        secondaryCardsOne: state.secondaryCardsOne,
        secondaryCardsTwo: state.secondaryCardsTwo,
        toggleTheme: toggleTheme,
        setMainCards: setMainCards,
        setSecondaryCardsOne: setSecondaryCardsOne,
        setSecondaryCardsTwo: setSecondaryCardsTwo,
      }}
      {...props}
    />
  );
};

export { Context, Provider };
