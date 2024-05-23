import { ChartDataConverter, ScaleDataInput, ScaleDataSet } from "../../Types";
import { ITransformOptions } from "../../../Types";
import { getKeys, getLabel, getLabels } from "../../util";


const ObjectScaleConverter = (options: ITransformOptions): ChartDataConverter<number> => {
    const { yKeys } = getKeys(options);
    const { yLabels } = getLabels(options);

    return (record: any): ScaleDataInput => {
        var result: ScaleDataInput = {
            labels: [],
            datasets: []
        };

        if (null == record) {
            return result;
        }

        // Initialize the dataset array based on the number of yKeys
        yKeys.map((key, index) => {
            const label = getLabel(yLabels, key, index);
            var data: ScaleDataSet = { key, label: label, data: [] };
            result.datasets[index] = data;
        })

        const xKey = options.xKey;

        const xKeyAccessor = xKey ? (r: any, key: any) => r[xKey] : (r: any, key: any) => key;

        // Populate the record for each entry in the object
        for (var key in record) {
            var data = record[key];
            result.labels.push(xKeyAccessor(data, key));
            // Populate the data for each yKey

            yKeys.map((key, index) => {
                result.datasets[index].data.push(data[key]);
            })
        }

        return result;
    }
}
export { ObjectScaleConverter }