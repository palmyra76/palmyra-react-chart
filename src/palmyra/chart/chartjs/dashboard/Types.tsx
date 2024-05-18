import { ChartStoreFactory, IEndPoint } from "palmyra-wire";
import { ChartType, StyleOptions } from "../../Types";


interface AccessorOptions {
    xKey?: String,
    yKey?: String,
    xLabel?: String,
    yLabel?: String
}

interface DataPipeLineOptions {
    preProcess?: any,
    convertData?: any,
    applyStyle?: any,
    postProcess?: any
}

interface IEndPointOptions {
    endPoint: IEndPoint,
    endPointVars?: Record<string, any>;
}

interface IDashboardOptions {
    refreshOptions?: any,
    storeFactory: ChartStoreFactory<any>
}

interface IDashBoardChart<T extends ChartType> {
    setRefreshOptions?: (refresh: any) => void
}

interface IStaticChartOptions {
    type: ChartType
    styleOptions?: StyleOptions,
    accessorOptions?: AccessorOptions,
    dataPipeLine?: DataPipeLineOptions,
    verbose?: boolean,
    guideLine?: any,
    plugins?: any,
    chartOptions?: any,
    onPointClick?: (data: any) => void,
    onAreaSelect?: (data: any) => void
}

interface IStaticChart<T extends ChartType> {
    toggleLegend?: () => void,
    showDataset?: () => void,
    hideDataset?: () => void,
    // setAccessOptions: (d: AccessorOptions) => void,
    // setStyleOptions: (d: StyleOptions) => void
    // setChartOptions: (d: any) => void
}


interface ISimpleChartOptions extends IStaticChartOptions {
    store?: any,
    endPointOptions?: IEndPointOptions,
    filter?: Record<string, string | number>,
}

interface ISimpleChart<T extends ChartType> extends IStaticChart<T> {
    setEndPointOptions?: (d: any) => void,
    setFilter?: (filter: any) => void,
    resetFilter?: () => void,
}

interface IDynamicChartOptions extends ISimpleChartOptions {

}

interface IDynamicChart<T extends ChartType> extends ISimpleChart<T> {
    setAccessOptions?: (d: AccessorOptions) => void,
    setStyleOptions?: (d: StyleOptions) => void
    setChartOptions?: (d: any) => void
}


export type { IDashboardOptions, IStaticChartOptions, ISimpleChartOptions, IDynamicChartOptions }

export type { IDashBoardChart, IStaticChart, ISimpleChart, IDynamicChart }