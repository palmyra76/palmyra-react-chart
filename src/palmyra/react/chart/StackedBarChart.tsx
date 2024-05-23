import { MutableRefObject } from "react";
import { RawDataType, StyleOptions } from "../../chart";
import { IRemoteDataChartOptions, ISimpleChart } from "../Types";
import { SimpleChart } from "./SimpleChart";


interface IStackedBarChartOptions extends IRemoteDataChartOptions<'StackedBar'> {
    chartRef?: MutableRefObject<ISimpleChart<'StackedBar'>>
    styleOptions?: never,
    accessorOptions?: never,
    style?: StyleOptions,
    accessor?: {
        xKey?: String,
        yKey?: String,
        group: String,
        xLabel?: String,
        yLabel?: String,
        sourceType?: RawDataType
    }
}


const StackedBarChart = (props: IStackedBarChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = props.style;
    if (props.accessor)
        derivedOptions.accessorOptions = props.accessor;

    return (
        <SimpleChart type={'StackedBar'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { StackedBarChart };
export type { IStackedBarChartOptions }