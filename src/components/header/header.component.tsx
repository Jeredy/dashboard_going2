import React from "react";

import ToggleThemeButton from "../button/toggle-theme-button.styles";

import {
  Container,
  TextContainer,
  Title,
  Text,
  ButtonContainer,
} from "./header.styles";

const Header: React.FC = () => {
  const [toggleTheme, setToggleTheme] = React.useState<boolean>(true);

  return (
    <Container>
      <TextContainer>
        <Title>Social Midia Dashboard</Title>
        <Text>Total Followers: 23,004</Text>
      </TextContainer>
      <ButtonContainer onClick={() => setToggleTheme(!toggleTheme)}>
        <Text>Dark Theme</Text>
        <ToggleThemeButton toggleTheme={toggleTheme} />
      </ButtonContainer>
    </Container>
  );
};

export default Header;
