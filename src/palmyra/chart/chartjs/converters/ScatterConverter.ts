
import { ITransformOptions, RawDataType } from "../../Types";
import { DataConverterGen } from "../DataConverterFactory";
import { ChartDataConverter, Point, ScatterDataInput, ScatterDataSet } from "../Types";
import { NoopConverter } from "./ScaleConverter";


function getKeys(options: ITransformOptions): { x: string, y: string, label: string } {
    const xLabel: string = options?.xLabel || 'name';
    const xKey: any = options?.xKey || 'x';
    const yKey: any = options?.yKey || 'y';

    if (yKey instanceof Array) {
        console.error("ScatterChart: yKey should be string only, not an array " + options.yKey);
    }

    return {
        x: xKey,
        y: yKey,
        label: xLabel
    }
}


const ArrayConverter = (options: ITransformOptions): ChartDataConverter<Point> => {
    const { x, y, label } = getKeys(options);
    return (records: any[]): ScatterDataInput => {
        var result: ScatterDataInput = {
            datasets: []
        };

        var dataMap: Record<string, ScatterDataSet> = {};

        const metadata = options.metadata;
        const assignMetadata = metadata ? (data: any, record: any) => {
            metadata.map((m) => {
                data[m] = record[m];
            });
        } : (_d: any, _r: any) => { };

        records.map((record, index) => {
            var dataSet: ScatterDataSet = getData(dataMap, record[label], options);            
            const d = {
                x: record[x],
                y: record[y]
            };
            assignMetadata(d, record);
            dataSet.data.push(d);
        });

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });

        return result;
    }
}


const converters: Partial<Record<RawDataType, DataConverterGen>> = {
    "Array": ArrayConverter,
    "noop": NoopConverter,
    // "group": GroupedDataConverter
}

export default converters;

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

