import { MutableRefObject } from 'react';
import { RawDataType, StyleOptions } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';

interface IStackedBarChartOptions extends IRemoteDataChartOptions<'StackedBar'> {
    chartRef?: MutableRefObject<ISimpleChart<'StackedBar'>>;
    styleOptions?: never;
    accessorOptions?: never;
    style?: StyleOptions;
    accessor?: {
        xKey?: String;
        yKey?: String;
        group: String;
        xLabel?: String;
        yLabel?: String;
        sourceType?: RawDataType;
    };
}
declare const StackedBarChart: (props: IStackedBarChartOptions) => import("react/jsx-runtime").JSX.Element;
export { StackedBarChart };
export type { IStackedBarChartOptions };
