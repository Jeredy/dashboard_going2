import { AreaChartModel } from "../components/charts/models/area-chart";

export interface CardModel {
  id: number;
  title: string;
  score: string;
  positionUp: boolean;
  description?: string;
  icon: string;
  link?: string;
  color: string;
  chartData?: AreaChartModel[];
}
