
import { MutableRefObject } from "react";
import { IDatasetStyleOptions, RawDataType } from "../../chart";
import { IRemoteDataChartOptions, ISimpleChart } from "../Types";
import { SimpleChart } from "./SimpleChart";
import { attributeAccessor } from "../../chart/chartjs/converters";


interface IBubbleChartOptions extends IRemoteDataChartOptions<'Bubble'> {
    chartRef?: MutableRefObject<ISimpleChart<'Bubble'>>
    styleOptions?: never,
    accessorOptions?: never,
    style?: IDatasetStyleOptions,
    accessor?: {
        xKey?: attributeAccessor,
        rKey?: attributeAccessor,
        xKeyLabelMap?: Record<string, string>,
        yKey?: attributeAccessor,
        xLabel?: String,
        yLabel?: String,
        sourceType?: RawDataType
    }
}


const BubbleChart = (props: IBubbleChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Bubble'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { BubbleChart };
export type { IBubbleChartOptions }