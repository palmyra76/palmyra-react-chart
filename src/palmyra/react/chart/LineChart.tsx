
import { MutableRefObject } from "react";
import { IDatasetStyleOptions, RawDataType } from "../../chart";
import { IRemoteDataChartOptions, ISimpleChart } from "../Types";
import { SimpleChart } from "./SimpleChart";


interface ILineChartOptions extends IRemoteDataChartOptions<'Line'> {
    chartRef?: MutableRefObject<ISimpleChart<'Line'>>
    styleOptions?: never,
    accessorOptions?: never,
    style?: IDatasetStyleOptions,
    accessor?: {
        xKey?: String,
        xKeyLabelMap?: Record<string, string>,
        yKey?: String,
        xLabel?: String,
        yLabel?: String,
        sourceType?: RawDataType
    }
}


const LineChart = (props: ILineChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Line'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { LineChart };
export type { ILineChartOptions }