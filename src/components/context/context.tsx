import React from "react";

import {
  MAIN_CARDS,
  SECONDARY_CARDS_ONE,
  SECONDARY_CARDS_TWO,
} from "../../data/cards";
import { CardModel } from "../@models/card-model";

import {
  PropsContext,
  PropsState,
  PropsAction,
  Types,
  LayoutProps,
} from "../@types/context";

const storageTheme = JSON.parse(localStorage.getItem("@theme")!);

const storageMainCards = JSON.parse(localStorage.getItem("@mainCards")!);
const storageSecondaryCardsOne = JSON.parse(
  localStorage.getItem("@secondaryCardsOne")!
);
const storageSecondaryCardsTwo = JSON.parse(
  localStorage.getItem("@secondaryCardsTwo")!
);

const mainCardsPosition = !!storageMainCards
  ? MAIN_CARDS.map((item, index) => {
      return MAIN_CARDS.filter(
        (item) => item.id === storageMainCards[index].id
      )[0];
    })
  : MAIN_CARDS;

const secondaryCardsPositionOne = !!storageSecondaryCardsOne
  ? SECONDARY_CARDS_ONE.map((item, index) => {
      return SECONDARY_CARDS_ONE.filter(
        (item) => item.id === storageSecondaryCardsOne[index].id
      )[0];
    })
  : SECONDARY_CARDS_ONE;

const secondaryCardsPositionTwo = !!storageSecondaryCardsTwo
  ? SECONDARY_CARDS_TWO.map((item, index) => {
      return SECONDARY_CARDS_TWO.filter(
        (item) => item.id === storageSecondaryCardsTwo[index].id
      )[0];
    })
  : SECONDARY_CARDS_TWO;

const INITIAL_STATE: PropsContext = {
  theme: storageTheme?.theme ?? true,
  mainCards: mainCardsPosition,
  secondaryCardsOne: secondaryCardsPositionOne,
  secondaryCardsTwo: secondaryCardsPositionTwo,
};

const Context = React.createContext({
  ...INITIAL_STATE,
});

const Reducer = (state: PropsState, action: PropsAction) => {
  const { type, payload } = action;

  switch (type) {
    case Types.TOGGLE_THEME:
      localStorage.setItem("@theme", JSON.stringify({ theme: !state.theme }));

      return {
        ...state,
        theme: !state.theme,
      };
    case Types.SET_MAIN_CARDS:
      let mainCards = (state.mainCards = payload!);

      const mainDataPosition = mainCards.map((item, index) => {
        return {
          id: item.id,
        };
      });

      localStorage.setItem("@mainCards", JSON.stringify(mainDataPosition));

      return {
        ...state,
        value: mainCards,
      };
    case Types.SET_SECONDARY_CARDS_ONE:
      let secondaryCardsOne = (state.secondaryCardsOne = payload!);

      const secondaryOneDataPosition = secondaryCardsOne.map((item, index) => {
        return {
          id: item.id,
        };
      });

      localStorage.setItem(
        "@secondaryCardsOne",
        JSON.stringify(secondaryOneDataPosition)
      );

      return {
        ...state,
        value: secondaryCardsOne,
      };
    case Types.SET_SECONDARY_CARDS_TWO:
      let secondaryCradsTwo = (state.secondaryCardsTwo = payload!);

      const secondaryTwoDataPosition = secondaryCradsTwo.map((item, index) => {
        return {
          id: item.id,
        };
      });

      localStorage.setItem(
        "@secondaryCardsTwo",
        JSON.stringify(secondaryTwoDataPosition)
      );

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
