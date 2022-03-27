import React from "react";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";
import { Context } from "../../context/context";
import { AreaChartModel } from "../models/area-chart";
import { Container, Text } from "./area-chart.styles";

interface PropsAreChart {
  cardChartData: AreaChartModel[];
}

const AreaChartComponent: React.FC<PropsAreChart> = ({ cardChartData }) => {
  const { theme } = React.useContext(Context);

  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const handleClick = (data: AreaChartModel, index: number) => {
    setActiveIndex(index);
  };

  const activeItem = cardChartData[activeIndex];
  const colors = theme
    ? { active: "#A7D7C5", desactive: "#085E7D" }
    : { active: "#FAEEE7", desactive: "#B1D0E0" };
  return (
    <Container>
      <Text>Novos Seguidores</Text>

      <ResponsiveContainer width="98%" height={100}>
        <BarChart width={140} height={40} data={cardChartData}>
          <Bar dataKey="new" onClick={handleClick}>
            {cardChartData.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? colors.active : colors.desactive}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Text className="content">{`Dados de ${activeItem.name}: ${activeItem.new}`}</Text>
    </Container>
  );
};

export default AreaChartComponent;
