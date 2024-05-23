
import { MutableRefObject } from "react";
import { IDatasetStyleOptions, RawDataType } from "../../chart";
import { IRemoteDataChartOptions, ISimpleChart } from "../Types";
import { SimpleChart } from "./SimpleChart";


interface IBarChartOptions extends IRemoteDataChartOptions<'Bar'> {
    chartRef?: MutableRefObject<ISimpleChart<'Bar'>>
    styleOptions?: never,
    accessorOptions?: never,
    style?: IDatasetStyleOptions,
    accessor?: {
        xKey?: String,
        yKey?: String,
        xLabel?: String,
        yLabel?: String,
        sourceType?: RawDataType
    }
}


const BarChart = (props: IBarChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Bar'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { BarChart };
export type { IBarChartOptions }