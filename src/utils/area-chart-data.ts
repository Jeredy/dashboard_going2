export const createChartData = () => {
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
