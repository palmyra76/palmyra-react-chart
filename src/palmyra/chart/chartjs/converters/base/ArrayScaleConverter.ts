import { ChartDataConverter, ScaleDataInput, ScaleDataSet } from "../../Types";
import { getKeys, getLabel, getLabels } from "../../util";
import { ConverterOptions, keyedAccessor } from "../Types";


const ArrayScaleConverter = (options: ConverterOptions): ChartDataConverter<any> => {
    const p = getKeys(options);
    const xKey: keyedAccessor<string> = p.xKey;
    const yKeys: keyedAccessor<any>[] = p.yKeys;
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

        yKeys.map((yKey: any, index) => {
            const key = yKey.ref;
            const label = getLabel(yLabels, key, index);
            var data: ScaleDataSet = { key, label: label, data: [] };            
            dataMap[index] = data;
            result.datasets[index] = data;
        })

        records.map((record, index) => {
            var label:string = xKey.accessor(record);
            result.labels.push(label);

            yKeys.map((yKey: any, yIndex) => {
                var dataset = dataMap[yIndex];
                dataset.data[index] = yKey.accessor(record);
            })
        });
        console.log(result.datasets[0]);
        return result;
    }
}

export { ArrayScaleConverter }