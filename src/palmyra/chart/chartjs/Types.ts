import { ChartOptions, ChartType as ChartJsType, Plugin } from "chart.js"
import { ChartType, IChartOptions, ITransformOptions, StyleOptions } from "../Types"
import { MutableRefObject } from "react"
import { IChartJS } from ".."

interface Colorable {
    borderColor?: any,
    backgroundColor?: any,
    borderWidth?: any,
}

type Point = {
    x: number | string, y: number
}

interface Bubble extends Point {
    r: number
}

interface DataSet<T> extends Colorable {
    key: string,
    label: string,
    data: T[]
}

type DataSetType = number | Bubble | Point;

interface ScaleDataSet extends DataSet<number> { }

interface ScatterDataSet extends DataSet<Point> { }

interface BubbleDataSet extends DataSet<Bubble> { }

interface DataSets<DataSetType> {
    labels?: string[]
    datasets: DataSet<DataSetType>[]
}

interface ScaleDataInput extends DataSets<number> {
    labels: string[]
}

interface BubbleDataInput extends DataSets<Bubble> {
    labels: string[]
}

interface ScatterDataInput extends DataSets<Point> { }

// interface ChartInput<TType extends ChartJsType> extends IChartOptions {
//     chartOptions?: any,
//     plugins?: Plugin<TType>[];
// }

interface IChartJSOptions<T extends ChartType> extends IChartOptions<T> {
    type: ChartType
    plugins?: Plugin<ChartJsType>[],
    options?: ChartOptions<ChartJsType>
    chartRef: MutableRefObject<IChartJS>
}

interface ChartDataConverter<DataSetType> {
    (data: any, options?: any): DataSets<DataSetType>;
}

interface ChartStyleConverter<DataSetType> {
    (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType>;
}

interface IStyleConverterFactory {
    (styleOptions: StyleOptions, transformOptions?: ITransformOptions): ChartStyleConverter<DataSetType>
}

export type { IChartJSOptions }

export type { ScaleDataInput, DataSet, DataSets, DataSetType };
export type { ScatterDataInput, Point };
export type { BubbleDataInput, Bubble };
export type { ScaleDataSet, ScatterDataSet, BubbleDataSet }

export type { ChartDataConverter, ChartStyleConverter, IStyleConverterFactory }

