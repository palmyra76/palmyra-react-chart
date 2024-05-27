
import { MutableRefObject } from "react";
import { IDatasetStyleOptions, RawDataType } from "../../chart";
import { IRemoteDataChartOptions, ISimpleChart } from "../Types";
import { SimpleChart } from "./SimpleChart";
import { attributeAccessor } from "../../chart/chartjs/converters";


interface IDoughnutChartOptions extends IRemoteDataChartOptions<'Doughnut'> {
    chartRef?: MutableRefObject<ISimpleChart<'Doughnut'>>
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


const DoughnutChart = (props: IDoughnutChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Doughnut'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { DoughnutChart };
export type { IDoughnutChartOptions }