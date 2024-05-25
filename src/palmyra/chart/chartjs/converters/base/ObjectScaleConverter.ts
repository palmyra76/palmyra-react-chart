import { ChartDataConverter, ScaleDataInput, ScaleDataSet } from "../../Types";
import { generateAccessors, getLabel, getLabels } from "../../util";
import { AccessorOptions } from "../../../../react";
import { keyedAccessor } from "../Types";


const ObjectScaleConverter = (options: AccessorOptions): ChartDataConverter<number> => {    
    const { xKey, yKeys, xLabelAccessor } = generateAccessors(options);
    const { yLabels } = getLabels(options);

    return (record: any): ScaleDataInput => {
        var result: ScaleDataInput = {
            labels: [],
            keys:[],
            datasets: []
        };

        if (null == record) {
            return result;
        }

        // Initialize the dataset array based on the number of yKeys
        yKeys.map((yKey: keyedAccessor<any>, index) => {
            const key = yKey.ref;
            const label = getLabel(yLabels, key, index);
            var data: ScaleDataSet = { key, label: label, data: [] };
            result.datasets[index] = data;
        })

        const xKeyAccessor = options.xKey ? (r,k) => xKey.accessor(r) : (r: any, key: any) => key;

        // Populate the record for each entry in the object
        for (var key in record) {
            var data = record[key];

            var xValue: string = xKeyAccessor(data, key);
            const label = xLabelAccessor(xValue);
            result.labels.push(label);
            result.keys.push(xValue);
            // Populate the data for each yKey

            yKeys.map((yKey: keyedAccessor<any>, index) => {
                result.datasets[index].data.push(yKey.accessor(data));
            })
        }
        
        return result;
    }
}
export { ObjectScaleConverter }