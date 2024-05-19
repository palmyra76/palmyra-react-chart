import { ChartOptions, ChartType as ChartJsType } from "chart.js"
import { MutableRefObject } from "react"
import { ChartType } from "../../chart"

interface IChartJSOptions {
    type: ChartType
    chartRef?: MutableRefObject<IChartJS>
    options?: ChartOptions<ChartJsType>,
    onPointClick?: (data: any) => void
    onAreaSelect?: (data: any) => void
}

interface IChartJS {
    clear: () => void;
    resize: (width?: number, height?: number) => void;
    reset: () => void;
    setData: (d: any) => void;
}

export type {IChartJS, IChartJSOptions}