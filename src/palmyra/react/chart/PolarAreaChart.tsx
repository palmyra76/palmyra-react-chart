
import { MutableRefObject } from "react";
import { IDatasetStyleOptions, RawDataType } from "../../chart";
import { IRemoteDataChartOptions, ISimpleChart } from "../Types";
import { SimpleChart } from "./SimpleChart";
import { attributeAccessor } from "../../chart/chartjs/converters";


interface IPolarChartOptions extends IRemoteDataChartOptions<'PolarArea'> {
    chartRef?: MutableRefObject<ISimpleChart<'PolarArea'>>
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


const PolarAreaChart = (props: IPolarChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'PolarArea'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { PolarAreaChart };
export type { IPolarChartOptions }