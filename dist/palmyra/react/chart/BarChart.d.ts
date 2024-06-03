import { MutableRefObject } from 'react';
import { IDatasetStyleOptions, RawDataType } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';
import { attributeAccessor } from '../../chart/chartjs/converters';

interface IBarChartOptions extends IRemoteDataChartOptions<'Bar'> {
    chartRef?: MutableRefObject<ISimpleChart<'Bar'>>;
    styleOptions?: never;
    accessorOptions?: never;
    style?: IDatasetStyleOptions;
    accessor?: {
        xKey?: attributeAccessor;
        xKeyLabelMap?: Record<string, string>;
        yKey?: attributeAccessor;
        xLabel?: String;
        yLabel?: String;
        sourceType?: RawDataType;
    };
}
declare const BarChart: (props: IBarChartOptions) => import("react/jsx-runtime").JSX.Element;
export { BarChart };
export type { IBarChartOptions };
