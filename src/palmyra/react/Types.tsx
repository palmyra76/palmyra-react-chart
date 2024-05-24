import { ChartStoreFactory, IEndPoint, IEndPointOptions } from "palmyra-wire";
import { ChartType, RawDataType, StyleOptions } from "../chart/Types";
import { MutableRefObject } from "react";
import { ChartOptions, ChartType as ChartJStype } from "chart.js";


type converter = (d: any) => any;


type chartJsOptions = any;


interface AccessorOptions {
    xKey?: String,
    yKey?: String[] | String,
    rKey?: String,
    group?: String,
    xLabel?: String,
    yLabel?: String[] | String,
    sourceType?: RawDataType
}

interface DataPipeLine {
    preProcess?: converter,
    convertData?: converter,
    applyStyle?: converter,
    postProcess?: converter,
    xScaleConverter?: converter
}

interface refreshOptions {
    interval: number,
    needDataRefresh: () => void
}

interface IDashboardOptions {
    children?: any,
    refreshOptions?: refreshOptions,
    storeFactory?: ChartStoreFactory<any>,
    dashboardRef?: MutableRefObject<IDashBoard>
}

interface IDashBoard {
    setRefreshOptions: (refresh: any) => void
}

interface DataPipeLineOptions {
    styleOptions?: StyleOptions,
    accessorOptions?: AccessorOptions
}

interface IDataSetOptions {
    labels: any,
    datasets: any
}

interface IAbstractChartOptions<T extends ChartType> extends DataPipeLineOptions {
    type?: ChartType
    dataPipeLine?: DataPipeLine,
    guideLine?: any,   // TODO guideline type to be defined
    plugins?: any,
    chartRef?: MutableRefObject<IAbstractChart<T>>
    chartOptions?: ChartOptions<ChartJStype>,
    onPointClick?: (data: any) => void, //TODO  argument definitions to be updated
    onAreaSelect?: (data: any) => void //TODO  argument definitions to be updated    
}

interface IAbstractChartJSOptions extends IAbstractChartOptions<any> {
    chartRef?: never,
    data?: any
    chartJsRef: MutableRefObject<IChartJS>
}

interface IChartJS {
    clear: () => void;
    resize: (width?: number, height?: number) => void;
    reset: () => void;
    setData: (d: any) => void;
}

interface IStaticChartOptions<T extends ChartType> extends IAbstractChartOptions<T> {
    type: ChartType
    chartRef?: MutableRefObject<IStaticChart<T>>,
    chartData: IDataSetOptions
}

interface RemoteQueryOptions {
    storeFactory?: ChartStoreFactory<any>,
    endPoint: IEndPoint,
    endPointVars?: IEndPointOptions
    filter?: any
}

interface IRemoteDataChartOptions<T extends ChartType> extends IAbstractChartOptions<T>, RemoteQueryOptions {

}

interface ISimpleChartOptions<T extends ChartType> extends IRemoteDataChartOptions<T> {
    type: ChartType,
    chartRef?: MutableRefObject<ISimpleChart<T>>
}

interface IDynamicChartOptions<T extends ChartType> extends ISimpleChartOptions<T> {
    chartRef?: MutableRefObject<IDynamicChart<T>>,
}

interface IAbstractChart<T extends ChartType> {
    toggleLegend: () => void,
    showDataset: () => void,
    hideDataset: () => void
}

interface IStaticChart<T extends ChartType> extends IAbstractChart<T> {
    setData: (data: any) => void
}

interface ISimpleChart<T extends ChartType> extends IAbstractChart<T> {
    setEndPointOptions: (d: IEndPointOptions) => void,
    setFilter: (filter: any) => void,
    resetFilter: () => void,
    onDataRefresh?: (rawData: any) => void
}

interface IDynamicChart<T extends ChartType> extends ISimpleChart<T> {
    setAccessorOptions: (d: AccessorOptions) => void,
    setStyleOptions: (d: StyleOptions) => void
    setChartOptions: (d: chartJsOptions) => void
}


export type { IDashboardOptions, IStaticChartOptions, ISimpleChartOptions, IDynamicChartOptions, DataPipeLineOptions, IAbstractChartOptions, IDataSetOptions }

export type { IDashBoard, IStaticChart, ISimpleChart, IDynamicChart, IAbstractChartJSOptions }

export type { RemoteQueryOptions, DataPipeLine, IRemoteDataChartOptions, IChartJS, AccessorOptions }