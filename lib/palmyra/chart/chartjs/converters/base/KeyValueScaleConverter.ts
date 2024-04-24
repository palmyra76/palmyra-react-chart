import { ChartDataConverter, ScaleDataInput, ScaleDataSet } from "../../Types";
import { ITransformOptions } from "../../../Types";
import { getKeys, getLabels } from "../../util";


const KeyValueScaleConverter = (options: ITransformOptions): ChartDataConverter<number> => {
    const { xKey } = getKeys(options);
    const { xLabel } = getLabels(options);

    return (record: any): ScaleDataInput => {
        var result: ScaleDataInput = {
            labels: [],
            datasets: []
        };
        if (null == record) {
            return result;
        }

        const label = xLabel || 'value';
        const key = xKey || xLabel || 'value';
        var dataset: ScaleDataSet = { key, label: label, data: [] };
        result.datasets[0] = dataset;

        for (var xValue in record) {
            result.labels.push(xValue);
            dataset.data.push(record[xValue]);
        }
        return result;
    }
}

export {KeyValueScaleConverter}