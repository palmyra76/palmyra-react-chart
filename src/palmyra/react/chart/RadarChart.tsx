
import { MutableRefObject } from "react";
import { IDatasetStyleOptions, RawDataType } from "../../chart";
import { IRemoteDataChartOptions, ISimpleChart } from "../Types";
import { SimpleChart } from "./SimpleChart";
import { attributeAccessor } from "../../chart/chartjs/converters";


interface IRadarChartOptions extends IRemoteDataChartOptions<'Radar'> {
    chartRef?: MutableRefObject<ISimpleChart<'Radar'>>
    styleOptions?: never,
    accessorOptions?: never,
    style?: IDatasetStyleOptions,
    accessor?: {
        xKey?: attributeAccessor,
        xKeyLabelMap?: Record<string, string>,
        yKey?: attributeAccessor,
        xLabel?: String,
        yLabel?: String,
        sourceType?: RawDataType
    }
}


const RadarChart = (props: IRadarChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Radar'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { RadarChart };
export type { IRadarChartOptions }