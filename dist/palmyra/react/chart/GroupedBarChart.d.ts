import { MutableRefObject } from 'react';
import { RawDataType, StyleOptions } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';

interface IGroupedBarChartOptions extends IRemoteDataChartOptions<'GroupedBar'> {
    chartRef?: MutableRefObject<ISimpleChart<'GroupedBar'>>;
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
declare const GroupedBarChart: (props: IGroupedBarChartOptions) => import("react/jsx-runtime").JSX.Element;
export { GroupedBarChart };
export type { IGroupedBarChartOptions };
