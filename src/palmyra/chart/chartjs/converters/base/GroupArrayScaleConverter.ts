import { ChartDataConverter, ScatterDataInput, ScatterDataSet } from "../../..";
import { AccessorOptions } from "../../../../react";

function getKeys(options: AccessorOptions): { x: string, y: string, group: string, label: string } {
    const xLabel: any = options?.xLabel || 'name';
    const xKey: any = options?.xKey || 'x';
    const yKey: any = options?.yKey || 'y';
    const group: any = options?.group;

    return {
        x: xKey,
        y: yKey,
        group,
        label: xLabel
    }
}


function getData(dataMap: Record<string, ScatterDataSet>, key: string, options: AccessorOptions): ScatterDataSet {
    var r: ScatterDataSet = dataMap[key];
    if (r)
        return r;

    r = {
        key,
        label: key,
        data: []
    };

    dataMap[key] = r;
    return r;
}


const GroupArrayScaleConverter = (options: AccessorOptions): ChartDataConverter<any> => {
    const { x, y, group, label } = getKeys(options);

    return (records: any[]): ScatterDataInput => {
        var result: ScatterDataInput = {
            datasets: []
        };

        if (null == records) {
            return result;
        }

        var dataMap: Record<string, ScatterDataSet> = {};
        const getLabel = group ? (r) => { return r[group] } : () => label;

        records.map((record, index) => {
            const l = getLabel(record);
            var dataSet: ScatterDataSet = getData(dataMap, l, options);
            dataSet.data.push({
                x: record[x],
                y: record[y]
            });
        });

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });
        return result;
    }
}


const GroupObjectScaleConverter = (options: AccessorOptions): ChartDataConverter<any> => {
    const { x, y, group, label } = getKeys(options);

    return (records: any): ScatterDataInput => {
        var result: ScatterDataInput = {
            datasets: []
        };

        if (null == records) {
            return result;
        }

        var dataMap: Record<string, ScatterDataSet> = {};
        const getLabel = group ? (r) => { return r[group] } : () => label;

        Object.values(records).map((record, index) => {
            const l = getLabel(record);
            var dataSet: ScatterDataSet = getData(dataMap, l, options);
            dataSet.data.push({
                x: record[x],
                y: record[y]
            });
        });

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });

        return result;
    }
}

export { GroupArrayScaleConverter, GroupObjectScaleConverter };