
import { MutableRefObject } from "react";
import { StyleOptions } from "../../chart";
import { IRemoteDataChartOptions, ISimpleChart } from "../Types";
import { SimpleChart } from "./SimpleChart";


interface IMultiLineChartOptions extends IRemoteDataChartOptions<'MultiLine'> {
    chartRef?: MutableRefObject<ISimpleChart<'MultiLine'>>
    styleOptions?: never,
    accessorOptions?: never,
    style?: StyleOptions,
    accessor?: {
        xKey?: String,
        yKey?: String[],
        xLabel?: String,
        yLabel?: String[],
        sourceType?: 'Array' | 'Object';
    }
}


const MultiLineChart = (props: IMultiLineChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = props.style;
    if (props.accessor)
        derivedOptions.accessorOptions = props.accessor;

    return (
        <SimpleChart type={'MultiLine'} {...props} {...derivedOptions} />
    )
}

export { MultiLineChart };
export type { IMultiLineChartOptions }