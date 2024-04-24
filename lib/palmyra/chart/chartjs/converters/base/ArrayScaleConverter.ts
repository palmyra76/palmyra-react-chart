import { ChartDataConverter, ScaleDataInput, ScaleDataSet } from "../../Types";
import { ITransformOptions } from "../../../Types";
import { getKeys, getLabel, getLabels } from "../../util";

const ArrayScaleConverter = (options: ITransformOptions): ChartDataConverter<any> => {
    const { xKey, yKeys } = getKeys(options);
    const { yLabels } = getLabels(options);

    return (records: any[]): ScaleDataInput => {
        var result: ScaleDataInput = {
            labels: [],
            datasets: []
        };
        if (null == records) {
            return result;
        }

        var dataMap: Record<string, ScaleDataSet> = {};

        yKeys.map((key, index) => {
            const label = getLabel(yLabels, key, index);
            var data: ScaleDataSet = { key, label: label, data: [] };
            dataMap[key] = data;
            result.datasets[index] = data;
        })

        records.map((record, index) => {
            var label = record[xKey];
            result.labels.push(label);

            yKeys.map((key) => {
                var dataset = dataMap[key];
                dataset.data[index] = record[key];
            })
        });
        return result;
    }
}

export {ArrayScaleConverter}