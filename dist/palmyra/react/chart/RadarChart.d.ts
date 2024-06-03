import { MutableRefObject } from 'react';
import { IDatasetStyleOptions, RawDataType } from '../../chart';
import { IRemoteDataChartOptions, ISimpleChart } from '../Types';
import { attributeAccessor } from '../../chart/chartjs/converters';

interface IRadarChartOptions extends IRemoteDataChartOptions<'Radar'> {
    chartRef?: MutableRefObject<ISimpleChart<'Radar'>>;
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
declare const RadarChart: (props: IRadarChartOptions) => import("react/jsx-runtime").JSX.Element;
export { RadarChart };
export type { IRadarChartOptions };
