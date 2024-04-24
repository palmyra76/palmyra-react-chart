import { InteractionItem, Plugin, ChartType as ChartJsType } from "chart.js";
import { MouseEventHandler, MutableRefObject } from "react";
import { getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import { getPointConverter } from "./DataConverterFactory";
import { AreaSelectDrag, ChartType, IChartOptions } from "..";


function isPointClicked(dataset: InteractionItem[]): boolean {
    return dataset.length > 0;
}

interface ListenerResult {
    onClick?: MouseEventHandler<any>;
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

const useClickListener = (chartType: string, props: IChartOptions<any>, chartRef: MutableRefObject<any>): ListenerResult => {
    if (!props.onPointClick)
        return {};

    const { data, transformOptions, onPointClick } = props;

    const getData = (dataset: InteractionItem[], element: InteractionItem[], elements: InteractionItem[]) => {
        if (!dataset.length) return;
        var convert = getPointConverter(chartType);
        return convert(data, transformOptions, element, elements)
    };

    const onClick = (event) => {
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

    return { onClick };
}

export { useClickListener, useAreaSelectListener };