import { InteractionItem } from "chart.js";
import { IgetPointData } from "../DataConverterFactory";
import { ChartDataConverter } from "../Types";
import { getKeys } from "../util";
import { DataPipeLine, AccessorOptions } from "../../../react";

const NoopConverter = (options: AccessorOptions): ChartDataConverter<any> => {
    return (data) => { return data };
}

const getScalePointData: IgetPointData = (data: any, options: AccessorOptions, dataPipeLine: DataPipeLine, element: InteractionItem[], elements: InteractionItem[]) => {

    var { xKey } = getKeys(options);
    const xValue = data.labels[element[0].index]

    if (options?.sourceType == 'KeyValue') {
        var { index, datasetIndex } = element[0];
        var dataSet = data.datasets[datasetIndex];
        var value = dataSet.data[index];
        return { [xValue]: value };
    }

    var result = { [xKey.ref]: xValue };
    element.map((e) => {
        var dataSet = data.datasets[e.datasetIndex];
        var label = dataSet.key;
        result[label] = dataSet.data[e.index];
    });

    return result;
}

export { NoopConverter, getScalePointData };