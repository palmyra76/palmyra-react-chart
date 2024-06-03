import { IDynamicChartOptions } from '../Types';

declare const DynamicChart: <T extends keyof import('../../chart').ChartRegistry>(props: IDynamicChartOptions<T>) => import("react/jsx-runtime").JSX.Element;
export { DynamicChart };
