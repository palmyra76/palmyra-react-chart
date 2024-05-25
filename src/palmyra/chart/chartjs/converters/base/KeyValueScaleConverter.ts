import { ChartDataConverter, ScaleDataInput, ScaleDataSet } from "../../Types";
import { generateAccessors, getLabels } from "../../util";
import { AccessorOptions } from "../../../../react";


const KeyValueScaleConverter = (options: AccessorOptions): ChartDataConverter<number> => {
    const { xKey, xLabelAccessor } = generateAccessors(options);
    const { xLabel, yLabels } = getLabels(options);
    
    return (record: any): ScaleDataInput => {
        var result: ScaleDataInput = {
            labels: [],
            keys:[],
            datasets: []
        };
        if (null == record) {
            return result;
        }

        const label: any = yLabels[0] || 'value';
        const key = xKey.ref || xLabel || 'name';
        var dataset: ScaleDataSet = { key, label: label, data: [] };
        result.datasets[0] = dataset;

        for (var k in record) {
            result.keys.push(k);
            const xValue = xLabelAccessor(k);
            result.labels.push(xValue);
            dataset.data.push(record[k]);
        }
        return result;
    }
}

export { KeyValueScaleConverter }