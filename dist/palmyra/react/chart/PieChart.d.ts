import { MutableRefObject } from 'react';
import { IDatasetStyleOptions, RawDataType } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';
import { attributeAccessor } from '../../chart/chartjs/converters';

interface IPieChartOptions extends IRemoteDataChartOptions<'Pie'> {
    chartRef?: MutableRefObject<ISimpleChart<'Pie'>>;
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
declare const PieChart: (props: IPieChartOptions) => import("react/jsx-runtime").JSX.Element;
export { PieChart };
export type { IPieChartOptions };
