import { MutableRefObject } from 'react';
import { IDatasetStyleOptions, RawDataType } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';
import { attributeAccessor } from '../../chart/chartjs/converters';

interface IDoughnutChartOptions extends IRemoteDataChartOptions<'Doughnut'> {
    chartRef?: MutableRefObject<ISimpleChart<'Doughnut'>>;
    styleOptions?: never;
    accessorOptions?: never;
    style?: IDatasetStyleOptions;
    accessor?: {
        xKey?: attributeAccessor;
        xKeyLabelMap?: Record<string, string>;
        yKey?: String | String[];
        xLabel?: String;
        yLabel?: String | String[];
        sourceType?: RawDataType;
    };
}
declare const DoughnutChart: (props: IDoughnutChartOptions) => import("react/jsx-runtime").JSX.Element;
export { DoughnutChart };
export type { IDoughnutChartOptions };
