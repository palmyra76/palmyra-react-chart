import { InteractionItem } from "chart.js";
import { IgetPointData } from "../DataConverterFactory";
import { ChartDataConverter } from "../Types";
import { ITransformOptions } from "../../Types";
import { getKeys } from "../util";

const NoopConverter = (options: ITransformOptions): ChartDataConverter<any> => {
    return (data) => { return data };
}

const getScalePointData: IgetPointData = (data: any, ITransformOptions: ITransformOptions, element: InteractionItem[], elements: InteractionItem[]) => {

    var { xKey } = getKeys(ITransformOptions);
    const xValue = data.labels[element[0].index]

    if (ITransformOptions.sourceType == 'KeyValue') {
        var { index, datasetIndex } = element[0];
        var dataSet = data.datasets[datasetIndex];
        var value = dataSet.data[index];
        return { [xValue]: value };
    }

    var result = { [xKey]: xValue };
    element.map((e) => {
        var dataSet = data.datasets[e.datasetIndex];
        var label = dataSet.label;
        result[label] = dataSet.data[e.index];
    });

    return result;
}

export { NoopConverter, getScalePointData };