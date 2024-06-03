import { MutableRefObject } from 'react';
import { IDatasetStyleOptions, RawDataType } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';
import { attributeAccessor } from '../../chart/chartjs/converters';

interface IScatterChartOptions extends IRemoteDataChartOptions<'Scatter'> {
    chartRef?: MutableRefObject<ISimpleChart<'Scatter'>>;
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
declare const ScatterChart: (props: IScatterChartOptions) => import("react/jsx-runtime").JSX.Element;
export { ScatterChart };
export type { IScatterChartOptions };
