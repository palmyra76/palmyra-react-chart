import { IStaticChartOptions } from '../Types';

declare const StaticChart: <T extends keyof import('../../chart').ChartRegistry>(props: IStaticChartOptions<T>) => import("react/jsx-runtime").JSX.Element;
export { StaticChart };
