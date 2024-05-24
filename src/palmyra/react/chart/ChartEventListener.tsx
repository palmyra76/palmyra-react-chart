import { InteractionItem, Plugin, ChartType as ChartJsType, Chart } from "chart.js";
import { MouseEventHandler, MutableRefObject, useRef } from "react";
import { getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import { getPointConverter } from "../../chart/chartjs/DataConverterFactory";
import { AreaSelectDrag, ChartType } from "../../chart";
import { DataPipeLine, IAbstractChartOptions } from "../Types";


function isPointClicked(dataset: InteractionItem[]): boolean {
    return dataset.length > 0;
}

interface ListenerResult {
    onClick?: MouseEventHandler<any>;
    setData?: Function
}

const useAreaSelectListener = (chartType: ChartType, chartOptions: any, plugins: Plugin<ChartJsType>[], callback: any) => {

    if (null != callback) {
        plugins.push(AreaSelectDrag);
        chartOptions.plugins.selectdrag = {
            enabled: true,
            onSelectComplete: (event) => {
                callback(event)
            }
        }
    }
}

const useClickListener = (chartType: string, props: IAbstractChartOptions<any>, dataPipeLine: DataPipeLine, chartRef: MutableRefObject<Chart>): ListenerResult => {
    if (!props.onPointClick)
        return {};

    const { accessorOptions, onPointClick } = props;
    const dataRef = useRef<any>(null);

    const getData = (dataset: InteractionItem[], element: InteractionItem[], elements: InteractionItem[]) => {
        if (!dataset.length) return;
        var convert = getPointConverter(chartType);
        return convert(dataRef.current, accessorOptions, dataPipeLine, element, elements)
    };

    const onClick = (event: any) => {
        const { current: chart } = chartRef;
        if (!chart) {
            return;
        }
        const datasetAtEvent = getDatasetAtEvent(chart, event);

        if (isPointClicked(datasetAtEvent)) {
            var result = getData(datasetAtEvent,
                getElementAtEvent(chart, event),
                getElementsAtEvent(chart, event));
            onPointClick(result);
        }
    };

    const setData = (d) => {
        dataRef.current = d;
    }

    return { onClick, setData };
}

export { useClickListener, useAreaSelectListener };