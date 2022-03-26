import React from "react";

import ToggleThemeButton from "../button/toggle-theme-button.styles";
import { Context } from "../context/context";

import {
  Container,
  TextContainer,
  Title,
  Text,
  ButtonContainer,
  TextTheme,
} from "./header.styles";

const Header: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(Context);

  return (
    <Container>
      <TextContainer>
        <Title>Social Midia Dashboard</Title>
        <Text>Total Followers: 23,004</Text>
      </TextContainer>
      <ButtonContainer onClick={toggleTheme}>
        <TextTheme>Dark Theme</TextTheme>
        <ToggleThemeButton toggleSide={theme} />
      </ButtonContainer>
    </Container>
  );
};

export default Header;
