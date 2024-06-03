import { MutableRefObject } from 'react';
import { IDatasetStyleOptions, RawDataType } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';
import { attributeAccessor } from '../../chart/chartjs/converters';

interface IBubbleChartOptions extends IRemoteDataChartOptions<'Bubble'> {
    chartRef?: MutableRefObject<ISimpleChart<'Bubble'>>;
    styleOptions?: never;
    accessorOptions?: never;
    style?: IDatasetStyleOptions;
    accessor?: {
        xKey?: attributeAccessor;
        rKey?: attributeAccessor;
        xKeyLabelMap?: Record<string, string>;
        yKey?: attributeAccessor;
        xLabel?: String;
        yLabel?: String;
        sourceType?: RawDataType;
    };
}
declare const BubbleChart: (props: IBubbleChartOptions) => import("react/jsx-runtime").JSX.Element;
export { BubbleChart };
export type { IBubbleChartOptions };
