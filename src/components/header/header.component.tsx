import React from "react";

import { TOTAL_FOLLOWERS } from "../../data/cards";
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
        <Text>{`Total Followers: ${TOTAL_FOLLOWERS}`}</Text>
      </TextContainer>
      <ButtonContainer>
        <TextTheme>Dark Theme</TextTheme>
        <ToggleThemeButton toggleSide={theme} onClick={toggleTheme} />
      </ButtonContainer>
    </Container>
  );
};

export default Header;
