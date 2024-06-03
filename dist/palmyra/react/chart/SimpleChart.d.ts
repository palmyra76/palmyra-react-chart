import { ISimpleChartOptions } from '../Types';

declare const SimpleChart: <T extends keyof import('../../chart').ChartRegistry>(props: ISimpleChartOptions<T>) => import("react/jsx-runtime").JSX.Element;
export { SimpleChart };
