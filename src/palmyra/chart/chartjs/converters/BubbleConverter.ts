import { InteractionItem } from "chart.js";

import { DataConverterGen, IgetPointData } from "../DataConverterFactory";
import { Bubble, BubbleDataInput, BubbleDataSet, ChartDataConverter } from "../Types";
import generateColors, { getRandomNumber } from "../style/GenerateColors";
import { ITransformOptions, RawDataType } from "../../Types";



const NoopConverter = (options: ITransformOptions): ChartDataConverter<Bubble> => {
    return (data) => { return data };
}

function assignColors(ITransformOptions: ITransformOptions,
    key: string, data: BubbleDataSet) {
    var length = Math.round(getRandomNumber(2, 10));
    var color = generateColors(length);
    data.backgroundColor = color[0];
    data.borderColor = color[length - 1];
}

function getData(dataMap: Record<string, BubbleDataSet>, key: string, ITransformOptions: ITransformOptions): BubbleDataSet {
    var r: BubbleDataSet = dataMap[key];
    if (r)
        return r;

    r = {
        key,
        label: key,
        data: []
    };
    assignColors(ITransformOptions, key, r);
    dataMap[key] = r;
    return r;
}

function getKeys(ITransformOptions: ITransformOptions): { x: string, y: string, r: string, label: string } {
    const xLabel: string = ITransformOptions?.xLabel || 'name';
    const xKey: any = ITransformOptions?.xKey || 'x';
    const yKey: any = ITransformOptions?.yKey || 'y';
    const rKey: string = ITransformOptions?.rKey || 'r';

    if (yKey instanceof Array) {
        console.error("BubbleChart: yKey should be string only, not an array " + ITransformOptions.yKey);
    }

    return {
        x: xKey,
        y: yKey,
        r: rKey,
        label: xLabel
    }
}

const ArrayConverter = (options: ITransformOptions): ChartDataConverter<Bubble> => {
    const { x, y, r, label } = getKeys(options);
    return (records: any[]): BubbleDataInput => {
        var result: BubbleDataInput = {
            labels: [],
            datasets: []
        };

        var dataMap: Record<string, BubbleDataSet> = {};

        records.map((record, index) => {
            var dataSet: BubbleDataSet = getData(dataMap, record[label], options);
            dataSet.data.push({
                x: record[x],
                y: record[y],
                r: record[r]
            });

        });

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });
        return result;
    }
}

const ObjectConverter = (options: ITransformOptions): ChartDataConverter<Bubble> => {

    const { x, y, r } = getKeys(options);
    return (record: any): BubbleDataInput => {
        var result: BubbleDataInput = {
            labels: [],
            datasets: []
        };

        var dataMap: Record<string, BubbleDataSet> = {};

        for (var xValue in record) {
            var dataSet: BubbleDataSet = getData(dataMap, xValue, options);
            var v = record[xValue];
            dataSet.data.push({
                x: v[x],
                y: v[y],
                r: v[r]
            });
        }

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });
        return result;
    }
}

const getPointData: IgetPointData = (data: any, ITransformOptions: ITransformOptions, element: InteractionItem[], elements: InteractionItem[]) => {
    const { x, y, r } = getKeys(ITransformOptions);
    var result = {};

    element.map((e) => {
        var { index, datasetIndex } = e;
        var dataSet = data.datasets[datasetIndex];
        var label = dataSet.label;
        var d = dataSet.data[index];

        result[label] = {
            [x]: d.x,
            [y]: d.y,
            [r]: d.r
        }
    });

    return result;
}

const converters: Partial<Record<RawDataType, DataConverterGen>> = {
    "Array": ArrayConverter,
    "Object": ObjectConverter,
    "noop": NoopConverter
}

export default converters;
export { getPointData }
