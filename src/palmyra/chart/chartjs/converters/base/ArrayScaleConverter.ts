import { ChartDataConverter, ScaleDataInput, ScaleDataSet } from "../../Types";
import { getKeys, getLabel, getLabels } from "../../util";
import { AccessorOptions } from "../../../../react";

const ArrayScaleConverter = (options: AccessorOptions): ChartDataConverter<any> => {
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

        yKeys.map((key: any, index) => {
            const label = getLabel(yLabels, key, index);
            var data: ScaleDataSet = { key, label: label, data: [] };
            dataMap[key] = data;
            result.datasets[index] = data;
        })

        records.map((record, index) => {
            var label = record[xKey];
            result.labels.push(label);

            yKeys.map((key: any) => {
                var dataset = dataMap[key];
                dataset.data[index] = record[key];
            })
        });
        return result;
    }
}

export { ArrayScaleConverter }