import { InteractionItem, Plugin, ChartType as ChartJsType, Chart } from "chart.js";
import { MouseEventHandler, MutableRefObject, useRef } from "react";
import { getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import { getPointConverter } from "../../chart/chartjs/DataConverterFactory";
import { AreaSelectDrag, ChartType, IChartOptions } from "../../chart";


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

const useClickListener = (chartType: string, props: IChartOptions<any>, chartRef: MutableRefObject<Chart>): ListenerResult => {
    if (!props.onPointClick)
        return {};

    const { transformOptions, onPointClick } = props;
    const dataRef = useRef<any>(props.data);

    const getData = (dataset: InteractionItem[], element: InteractionItem[], elements: InteractionItem[]) => {
        if (!dataset.length) return;
        var convert = getPointConverter(chartType);
        return convert(dataRef.current, transformOptions, element, elements)
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