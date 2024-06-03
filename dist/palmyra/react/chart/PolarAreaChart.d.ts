import { MutableRefObject } from 'react';
import { IDatasetStyleOptions, RawDataType } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';
import { attributeAccessor } from '../../chart/chartjs/converters';

interface IPolarChartOptions extends IRemoteDataChartOptions<'PolarArea'> {
    chartRef?: MutableRefObject<ISimpleChart<'PolarArea'>>;
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
declare const PolarAreaChart: (props: IPolarChartOptions) => import("react/jsx-runtime").JSX.Element;
export { PolarAreaChart };
export type { IPolarChartOptions };
