import { ChartDataConverter, ITransformOptions, ScaleDataInput, ScaleDataSet } from "../../..";
import { getKeys } from "../../util";


const TwoXDimArrayScaleConverter = (options: ITransformOptions): ChartDataConverter<any> => {
    const { xKey, yKeys } = getKeys(options);

    return (records: any[]): ScaleDataInput => {
        var result: ScaleDataInput = {
            labels: [],
            datasets: []
        };
        const dataLabels: string[] = [];
        if (null == records) {
            return result;
        }

        const xKeys: string[] = xKey;
        const primaryKey = xKeys[0];
        const secondaryKey = xKeys[1];
        const yKey = yKeys[0] || 'count';

        const tempLabels = {};
        const tempSecLabels = {};

        var dataMap: Record<string, ScaleDataSet> = {};

        const initDataSet = (index: number, key: string, label: string) => {
            var data: ScaleDataSet = { key, label: label, data: [] };
            dataMap[key] = data;
            result.datasets[index] = data;
        }

        var currentPrimaryIndex = 0;

        records.map((record, index) => {
            var primaryLabel = record[primaryKey];

            if (null == tempLabels[primaryLabel]) {
                tempLabels[primaryLabel] = currentPrimaryIndex++;
                result.labels.push(primaryLabel);
            }

            var secondaryLabel = record[secondaryKey];
            if (!tempSecLabels[secondaryLabel]) {
                tempSecLabels[secondaryLabel] = secondaryLabel;
                initDataSet(dataLabels.length, secondaryLabel, secondaryLabel);
                dataLabels.push(secondaryLabel);
            }

            var dataset = dataMap[secondaryLabel];
            dataset.data[tempLabels[primaryLabel]] = record[yKey];
        });

        return result;
    }
}

export {TwoXDimArrayScaleConverter};