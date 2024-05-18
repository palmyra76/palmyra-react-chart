import { ChartStoreFactory, IEndPoint, IEndPointOptions } from "palmyra-wire";
import { ChartType, StyleOptions } from "../../Types";
import { MutableRefObject } from "react";

type converter = (d: any) => any;
type dataConsumer = (d: any) => void;

type chartJsOptions = any;

interface AsyncDataProvider {
    fetch: () => void,
    subscribe: (dataConsumer) => void;
}

interface AccessorOptions {
    xKey?: String,
    yKey?: String,
    xLabel?: String,
    yLabel?: String
}

interface DataPipeLineOptions {
    preProcess?: converter,
    convertData?: converter,
    applyStyle?: converter,
    postProcess?: converter
}

interface IDashboardOptions {
    refreshOptions?: any,
    storeFactory?: ChartStoreFactory<any>,
    chartRef?: MutableRefObject<IDashBoard>
}

interface IDashBoard {
    setRefreshOptions: (refresh: any) => void
}

interface IAbstractChartOptions {
    type: ChartType
    styleOptions?: StyleOptions,
    accessorOptions?: AccessorOptions,
    dataPipeLine?: DataPipeLineOptions,
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

interface remoteData {
    endPoint: IEndPoint,
    endPointVars?: IEndPointOptions
    defaultFilter?: any
}

interface ISimpleChartOptions<T extends ChartType> extends IAbstractChartOptions, remoteData {
    chartRef?: MutableRefObject<ISimpleChart<T>>,
    dataProvider: AsyncDataProvider
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


export type { IDashboardOptions, IStaticChartOptions, ISimpleChartOptions, IDynamicChartOptions }

export type { IDashBoard, IStaticChart, ISimpleChart, IDynamicChart }

export type { AsyncDataProvider, dataConsumer }