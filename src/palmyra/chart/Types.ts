import { ChartStoreFactory, IEndPoint, IEndPointOptions, strings } from "palmyra-wire";

interface ChartRegistry {
    Line: {},
    MultiLine: {},
    AreaChart: {},
    Bar: {},
    GroupedBar: {},
    StackedBar: {},
    Scatter: {},
    GroupedScatter: {},
    Bubble: {},
    Pie: {},
    Doughnut: {},
    Radar: {},
    PolarArea: {}
}

type RawDataType = 'Array' | 'Object' | 'KeyValue' | 'Custom' | 'noop';

interface ITransformOptions {
    sourceType?: RawDataType,
    xKey?: string,
    group?: string,
    yKey?: strings,
    rKey?: string,
    xLabel?: string,
    yLabel?: strings,
    metadata?: string[]
}

type ChartType = keyof ChartRegistry;

type NamedStyle = Record<string, ChartStyle>;

type IStyleOptions = {
    type?: StyleType,
    style?: NamedStyle | ChartStyle[] | Record<string, ChartStyle[]> | Record<string, NamedStyle>;
}

type measure = string | number;

interface Positionable {
    height?: measure,
    width?: measure
}

interface Titleable {
    name?: string,
    title?: string
    hideTitle?: boolean
}

type StyleOptions = IStyleOptions | Record<string, ChartStyle> | ChartStyle[] | Record<string, ChartStyle[]>;

interface ChartStyle {
    backgroundColor?: string,
    borderColor?: string,
    borderWidth?: number,
    radius?: number,
    hoverRadius?: number,
    hidden? : boolean,
    barThickness?: number
}

type StyleType = 'Array' | 'Named' | 'Nested' | 'Random' | 'Noop';

interface transformable {
    transformOptions?: ITransformOptions;
}

type PostProcessor<T> = (data: T) => T;
type DataTransformer<T> = (d: any) => T;

interface LineTransformOptions extends ITransformOptions {
    xKey?: string,
    group?: never,
    yKey?: string,
    rKey?: never,
}

interface BarTransformOptions extends ITransformOptions {
    xKey?: string,
    group?: never,
    yKey?: string,
    rKey?: never,
}

interface GroupedBarTransformOptions extends ITransformOptions {
    xKey?: string,
    group?: string,
    yKey?: string,
    rKey?: never,
}

interface GroupedScatterTransformOptions extends ITransformOptions {
    group: string,
    xKey: string,
    yKey: string
}
interface ScatterTransformOptions extends ITransformOptions { }
interface BubbleTransformOptions extends ITransformOptions { }
interface PieTransformOptions extends ITransformOptions { }
interface DoughnutTransformOptions extends ITransformOptions { }
interface RadarTransformOptions extends ITransformOptions { }
interface PolarAreaTransformOptions extends ITransformOptions { }


type TypedTransformOptions<T extends ChartType> =
    T extends 'Bar' ? BarTransformOptions :
    T extends 'GroupedBar' ? GroupedBarTransformOptions :
    T extends 'GroupedScatter' ? GroupedScatterTransformOptions :
    T extends 'Line' ? LineTransformOptions :
    T extends 'Scatter' ? ScatterTransformOptions :
    T extends 'Bubble' ? BubbleTransformOptions :
    T extends 'Pie' ? PieTransformOptions :
    T extends 'Doughnut' ? DoughnutTransformOptions :
    T extends 'Radar' ? RadarTransformOptions :
    T extends 'PolarArea' ? PolarAreaTransformOptions :
    never;


interface SelectedArea {
    start: { x: number, y: number }, end: { x: number, y: number }
}

interface chartEventListeners {
    onPointClick?: Function,
    onAreaSelect?: (SelectedArea: any) => void,
}

interface IChartOptions<T extends ChartType> extends Titleable, Positionable, chartEventListeners {
    data?: any
    transformOptions?: TypedTransformOptions<T>
    postProcessors?: PostProcessor<any>[]
}

interface storeBacked {
    storeOptions?: {
        endPoint?: IEndPoint
        endPointOptions?: IEndPointOptions
    }
}

interface IPalmyraChartOptions<T extends ChartType> extends IChartOptions<T>, storeBacked {
    data?: never,
    storeFactory?: ChartStoreFactory<any>,
    chartOptions?: any,
    type: ChartType,
    styleOptions?: StyleOptions
}

interface IChart {
    setData: (data: any) => void,
    setTransformOptions: (tx: ITransformOptions) => void,
    clearData: () => void,
    clear: () => void,
    reset: () => void
}

export type { ChartRegistry, StyleOptions, ChartStyle, transformable, ITransformOptions, ChartType, RawDataType, SelectedArea }
export type { IChartOptions, IChart, PostProcessor, DataTransformer, TypedTransformOptions, IPalmyraChartOptions }
export type { GroupedScatterTransformOptions, StyleType, storeBacked }