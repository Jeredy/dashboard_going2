import { CardModel } from "../models/cardModel";

const createChartData = () => {
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];

  const data = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 6)
  ).map((item, index) => {
    return {
      name: months[index],
      new: Math.floor(Math.random() * 4000 + 1000),
      loss: Math.floor(Math.random() * 4000 + 1000),
    };
  });

  return data;
};

export const TOTAL_FOLLOWERS: string = "23,004";

export const MAIN_CARDS: CardModel[] = [
  {
    id: 1,
    title: "1987",
    score: "12 Today",
    positionUp: true,
    icon: "facebook",
    link: "@nathanf",
    color: "hsl(208, 92%, 53%)",
    chartData: createChartData(),
  },
  {
    id: 2,
    title: "1044",
    score: "12 Today",
    positionUp: true,
    icon: "twitter",
    link: "@nathanf",
    color: "hsl(203, 89%, 53%)",
    chartData: createChartData(),
  },
  {
    id: 3,
    title: "11k",
    score: "12 Today",
    positionUp: true,
    icon: "instagram",
    link: "@realnathanf",
    color: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
    chartData: createChartData(),
  },
  {
    id: 4,
    title: "8239",
    score: "12 Today",
    positionUp: false,
    icon: "youtube",
    link: "Nathan F.",
    color: "hsl(348, 97%, 39%)",
    chartData: createChartData(),
  },
];

export const SECONDARY_CARDS_ONE: CardModel[] = [
  {
    id: 10,
    title: "87",
    score: "3%",
    positionUp: true,
    icon: "facebook",
    description: "Page View",
    color: "hsl(208, 92%, 53%)",
  },
  {
    id: 20,
    title: "52",
    score: "2%",
    positionUp: false,
    icon: "facebook",
    description: "Likes",
    color: "hsl(203, 89%, 53%)",
  },
  {
    id: 30,
    title: "54062",
    score: "2257%",
    positionUp: true,
    icon: "instagram",
    description: "Likes",
    color: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
  },
  {
    id: 40,
    title: "52k",
    score: "1375%",
    positionUp: false,
    icon: "instagram",
    description: "Profile Views",
    color: "hsl(348, 97%, 39%)",
  },
];

export const SECONDARY_CARDS_TWO: CardModel[] = [
  {
    id: 101,
    title: "117",
    score: "303%",
    positionUp: true,
    icon: "twitter",
    description: "Retweets",
    color: "hsl(208, 92%, 53%)",
  },
  {
    id: 201,
    title: "507",
    score: "553%",
    positionUp: true,
    icon: "twitter",
    description: "Likes",
    color: "hsl(203, 89%, 53%)",
  },
  {
    id: 301,
    title: "107",
    score: "19%",
    positionUp: false,
    icon: "youtube",
    description: "Likes",
    color: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
  },
  {
    id: 401,
    title: "1407",
    score: "12%",
    positionUp: false,
    icon: "youtube",
    description: "Total Views",
    color: "hsl(348, 97%, 39%)",
  },
];
