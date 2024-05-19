import { ChartStore, ChartStoreFactory, IEndPoint, IEndPointOptions } from "palmyra-wire";
import { ChartType, StyleOptions } from "../chart/Types";
import { MutableRefObject } from "react";

type converter = (d: any) => any;


type chartJsOptions = any;


interface AccessorOptions {
    xKey?: String,
    yKey?: String,
    xLabel?: String,
    yLabel?: String
}

interface DataPipeLine {
    preProcess?: converter,
    convertData?: converter,
    applyStyle?: converter,
    postProcess?: converter
}

interface refreshOptions {
    interval: number,
    needDataRefresh: () => void
}

interface IDashboardOptions {
    refreshOptions?: refreshOptions,
    storeFactory?: ChartStoreFactory<any>,
    chartRef?: MutableRefObject<IDashBoard>
}

interface IDashBoard {
    setRefreshOptions: (refresh: any) => void
}

interface DataPipeLineOptions {
    styleOptions: StyleOptions,
    accessorOptions: AccessorOptions
}

interface IAbstractChartOptions extends DataPipeLineOptions {
    type: ChartType
    dataPipeLine?: DataPipeLine,
    verbose?: boolean,
    guideLine?: any,   // TODO guideline type to be defined
    plugins?: any,
    chartOptions?: chartJsOptions,
    onPointClick?: (data: any) => void, //TODO  argument definitions to be updated
    onAreaSelect?: (data: any) => void //TODO  argument definitions to be updated    
}

interface IStaticChartOptions<T extends ChartType> extends IAbstractChartOptions {
    chartRef?: MutableRefObject<IStaticChart<T>>,
    chartData: any
}

interface RemoteQueryOptions {
    store: ChartStore<any>,
    endPoint: IEndPoint,
    endPointVars?: IEndPointOptions
    filter?: any
}

interface ISimpleChartOptions<T extends ChartType> extends IAbstractChartOptions, RemoteQueryOptions {
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


export type { IDashboardOptions, IStaticChartOptions, ISimpleChartOptions, IDynamicChartOptions, DataPipeLineOptions, IAbstractChartOptions }

export type { IDashBoard, IStaticChart, ISimpleChart, IDynamicChart }

export type { RemoteQueryOptions, DataPipeLine }