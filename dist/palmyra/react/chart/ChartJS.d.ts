import { ChartType, IChart, IChartJSOptions } from '../../chart';

interface IChartJS extends IChart {
}
declare function ChartJS<T>(p: IChartJSOptions<ChartType>): import("react/jsx-runtime").JSX.Element;
export { ChartJS };
export type { IChartJS };
