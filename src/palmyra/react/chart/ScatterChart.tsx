
import { MutableRefObject } from "react";
import { IDatasetStyleOptions, RawDataType } from "../../chart";
import { IRemoteDataChartOptions, ISimpleChart } from "../Types";
import { SimpleChart } from "./SimpleChart";
import { attributeAccessor } from "../../chart/chartjs/converters";


interface IScatterChartOptions extends IRemoteDataChartOptions<'Scatter'> {
    chartRef?: MutableRefObject<ISimpleChart<'Scatter'>>
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


const ScatterChart = (props: IScatterChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Scatter'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { ScatterChart };
export type { IScatterChartOptions }