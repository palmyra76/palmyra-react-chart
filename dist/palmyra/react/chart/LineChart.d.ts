import { MutableRefObject } from 'react';
import { IDatasetStyleOptions, RawDataType } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';

interface ILineChartOptions extends IRemoteDataChartOptions<'Line'> {
    chartRef?: MutableRefObject<ISimpleChart<'Line'>>;
    styleOptions?: never;
    accessorOptions?: never;
    style?: IDatasetStyleOptions;
    accessor?: {
        xKey?: String;
        xKeyLabelMap?: Record<string, string>;
        yKey?: String;
        xLabel?: String;
        yLabel?: String;
        sourceType?: RawDataType;
    };
}
declare const LineChart: (props: ILineChartOptions) => import("react/jsx-runtime").JSX.Element;
export { LineChart };
export type { ILineChartOptions };
