import { ChartDataConverter, ITransformOptions, ScatterDataInput, ScatterDataSet } from "../../..";

function getKeys(options: ITransformOptions): { x: string, y: string, group: string, label: string } {
    const xLabel: string = options?.xLabel || 'name';
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


function getData(dataMap: Record<string, ScatterDataSet>, key: string, ITransformOptions: ITransformOptions): ScatterDataSet {
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


const GroupArrayScaleConverter = (options: ITransformOptions): ChartDataConverter<any> => {
    const { x, y, group, label } = getKeys(options);

    return (records: any[]): ScatterDataInput => {
        var result: ScatterDataInput = {
            datasets: []
        };
        var dataMap: Record<string, ScatterDataSet> = {};        
        const getLabel = group ? (r) => {return r[group]} : () => label;

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

export { GroupArrayScaleConverter };