import { ChartOptions, ChartType as ChartJsType } from "chart.js"
import { MutableRefObject } from "react"
import { ChartType } from "../../chart"
import { IDataSetOptions } from "../Types"

interface IChartJSOptions {
    type: ChartType
    chartRef?: MutableRefObject<IChartJS>
    options?: ChartOptions<ChartJsType>,
    onPointClick?: (data: any) => void
    onAreaSelect?: (data: any) => void
    plugins?: any
    chartData?: IDataSetOptions
}

interface IChartJS {
    clear: () => void;
    resize: (width?: number, height?: number) => void;
    reset: () => void;
    setData: (d: any) => void;
}

export type { IChartJS, IChartJSOptions }