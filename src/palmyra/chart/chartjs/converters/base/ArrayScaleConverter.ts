import { ChartDataConverter, ScaleDataInput, ScaleDataSet } from "../../Types";
import { generateAccessors, getLabel, getLabels } from "../../util";
import { ConverterOptions, keyedAccessor } from "../Types";


const ArrayScaleConverter = (options: ConverterOptions): ChartDataConverter<any> => {
    const p = generateAccessors(options);
    const xKey: keyedAccessor<string> = p.xKey;
    const yKeys: keyedAccessor<any>[] = p.yKeys;
    const xLabelAccessor = p.xLabelAccessor;
    const { yLabels } = getLabels(options);

    return (records: any[]): ScaleDataInput => {
        var result: ScaleDataInput = {
            labels: [],
            keys:[],
            datasets: []
        };
        if (null == records) {
            return result;
        }

        var dataMap: Record<string, ScaleDataSet> = {};

        yKeys.map((yKey: any, index) => {
            const key = yKey.ref;
            const label = getLabel(yLabels, key, index);
            var data: ScaleDataSet = { key, label: label, data: [] };
            dataMap[index] = data;
            result.datasets[index] = data;
        })

        records.map((record, index) => {
            var xValue: string = xKey.accessor(record);
            const label = xLabelAccessor(xValue);
            result.labels.push(label);
            result.keys.push(xValue);

            yKeys.map((yKey: any, yIndex) => {
                var dataset = dataMap[yIndex];
                dataset.data[index] = yKey.accessor(record);
            })
        });
        return result;
    }
}

export { ArrayScaleConverter }