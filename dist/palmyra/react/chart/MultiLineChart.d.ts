import { MutableRefObject } from 'react';
import { StyleOptions } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';

interface IMultiLineChartOptions extends IRemoteDataChartOptions<'MultiLine'> {
    chartRef?: MutableRefObject<ISimpleChart<'MultiLine'>>;
    styleOptions?: never;
    accessorOptions?: never;
    style?: StyleOptions;
    accessor?: {
        xKey?: String;
        yKey?: String[];
        xLabel?: String;
        yLabel?: String[];
        sourceType?: 'Array' | 'Object';
    };
}
declare const MultiLineChart: (props: IMultiLineChartOptions) => import("react/jsx-runtime").JSX.Element;
export { MultiLineChart };
export type { IMultiLineChartOptions };
