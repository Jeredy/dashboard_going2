import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    backgroundColorBefore: string;
    cardBackgroundColor: string;
    cardBackgroundColorHover: string;
    cardShadow: string;
    cardShadowHover: string;
    cardMainTitle: string;
    cardText: string;
    toggleButtonColorOn: string;
    toggleButtonColorOff: string;
    toggleButtonShadow: string;
    toggleButtonCircle: string;
    textTheme: string;
    headerTitle: string;
    headerDivider: string;
    scoreColorUp: string;
    scoreColorDown: string;
  }
}

const score = {
  scoreColorUp: "#1EB589",
  scoreColorDown: "#DC414C",
}

export const lightTheme: DefaultTheme = {
  backgroundColor: "#fff",
  backgroundColorBefore: "#f8f9fe",
  cardBackgroundColor: "#f0f3fa",
  cardBackgroundColorHover: "#e1e3f0",
  cardShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
  cardShadowHover: "0px 1px 5px rgba(94.1, 95.3, 98, 0.4)",
  cardMainTitle: "#21242d",
  cardText: "#65687b",
  toggleButtonColorOn:
    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  toggleButtonColorOff: "hsl(230, 22%, 74%)",
  toggleButtonShadow: "0px 1px 2px rgba(94.1, 95.3, 98, 0.4)",
  toggleButtonCircle: "#f0f3fa",
  headerTitle: "#44474e",
  textTheme: "#65687b",
  headerDivider: "#373a4d",
  scoreColorUp: score.scoreColorUp,
  scoreColorDown: score.scoreColorDown,
};

export const darkTheme: DefaultTheme = {
  backgroundColor: "#1d2029",
  backgroundColorBefore: "#20222f",
  cardBackgroundColor: "#252b43",
  cardBackgroundColorHover: "#333a56",
  cardShadow: "0px 1px 3px rgba(123.3, 142.7, 220.3, .8)",
  cardShadowHover: "0px 1px 5px rgba(123.3, 142.7, 220.3, 1)",
  cardMainTitle: "#fff",
  cardText: "#939cbd",
  toggleButtonColorOn:
    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  toggleButtonColorOff:
    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  toggleButtonShadow: "0px 1px 3px rgba(123.3, 142.7, 220.3, .4)",
  toggleButtonCircle: "#343957",
  headerTitle: "#fff",
  headerDivider: "#898c9b",
  textTheme: "#fff",
  scoreColorUp: score.scoreColorUp,
  scoreColorDown: score.scoreColorDown,
};
