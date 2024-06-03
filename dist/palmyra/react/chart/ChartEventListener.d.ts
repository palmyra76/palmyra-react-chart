import { Plugin, ChartType as ChartJsType, Chart } from 'chart.js';
import { MouseEventHandler, MutableRefObject } from 'react';
import { ChartType } from '../../chart';
import { DataPipeLine, IAbstractChartOptions } from '../Types';

interface ListenerResult {
    onClick?: MouseEventHandler<any>;
    setData?: Function;
}
declare const useAreaSelectListener: (chartType: ChartType, chartOptions: any, plugins: Plugin<ChartJsType>[], callback: any) => void;
declare const useClickListener: (chartType: string, props: IAbstractChartOptions<any>, dataPipeLine: DataPipeLine, chartRef: MutableRefObject<Chart>) => ListenerResult;
export { useClickListener, useAreaSelectListener };
