import React from "react";

interface PropsContext {
  theme: boolean;
  toggleTheme?: () => void;
}

interface PropsAction {
  type: string;
  payload?: unknown;
}

interface LayoutProps {
  children: React.ReactNode;
}

const INITIAL_STATE = {
  theme: true,
};

const Context = React.createContext<PropsContext>({
  ...INITIAL_STATE,
  toggleTheme: () => {},
});

const Reducer = (state: PropsContext, action: PropsAction) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};

const Provider = (props: LayoutProps) => {
  const [state, dispatch] = React.useReducer(Reducer, INITIAL_STATE);

  const toggleTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <Context.Provider
      value={{
        theme: state.theme,
        toggleTheme: toggleTheme,
      }}
      {...props}
    />
  );
};

export { Context, Provider };
