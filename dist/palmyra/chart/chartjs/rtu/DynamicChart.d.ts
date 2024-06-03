import { MutableRefObject } from 'react';
import { ChartType as ChartJsType, Plugin } from 'chart.js';
import { ChartType, IPalmyraChartOptions, TypedTransformOptions } from '../../Types';

interface IDynamicChartOptions<T extends ChartType> extends IPalmyraChartOptions<T> {
    filter?: any;
    limit?: number;
    onDataChange?: (d: any) => void;
    plugins?: Plugin<ChartJsType>[];
    chartRef?: MutableRefObject<IDynamicChart<T>>;
}
interface IDynamicChart<T extends ChartType> {
    setFilter: (filter: any) => void;
    setTransformOptions: (o: TypedTransformOptions<T>) => void;
}
declare const DynamicChart: <T extends keyof import('../../Types').ChartRegistry>(props: IDynamicChartOptions<T>) => import("react/jsx-runtime").JSX.Element;
export default DynamicChart;
export type { IDynamicChart };
