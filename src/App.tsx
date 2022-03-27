import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { ThemeProvider } from "styled-components";

import { Context } from "./components/context/context";
import MainCardsPreview from "./components/main-cards-preview/main-cards-preview.components";
import SecondaryCardsPreview from "./components/secondary-cards-preview/secondary-cards-preview.components";
import Header from "./components/header/header.component";
import { onDragEnd } from "./utils/drag-drop";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyles from "./GlobalStyles";

import { Container } from "./App.styles";

const App: React.FC = () => {
  const context = React.useContext(Context);

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, context)}>
      <ThemeProvider theme={context.theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <MainCardsPreview />
          <SecondaryCardsPreview />
        </Container>
      </ThemeProvider>
    </DragDropContext>
  );
};

export default App;
