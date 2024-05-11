import { default as LineConverters } from './converters/LineConverter';
import { default as BarConverters } from './converters/BarConverter';
import { default as GroupedBarConverters } from './converters/GroupedBarConverter'
import { default as ScatterConverters } from './converters/ScatterConverter';
import { default as GroupedScatterConverters } from './converters/GroupedScatterConverter';
import { default as BubbleConverters, getPointData as getBubblePointData } from './converters/BubbleConverter';
import { default as RadarConverters } from './converters/RadarConverter';
import { default as PolarAreaConverters } from './converters/PolarConverter';
import { default as PieConverters } from './converters/PieConverter';
import { default as DoughnutConverters } from './converters/DoughnutConverter';

import { getScalePointData } from './converters/ScaleConverter';
import { InteractionItem } from 'chart.js';
import { ChartType, ITransformOptions, RawDataType } from '../Types';
import { ChartDataConverter, DataSetType } from '..';


type IgetPointData = (data: any, options: ITransformOptions, element: InteractionItem[], elements: InteractionItem[]) => Record<string, any>;

interface DataConverterGen {
    (options: ITransformOptions): ChartDataConverter<DataSetType>
}

const NoopConverter = (data: any): any => {
    return data;
}

var dataMap: Record<ChartType, Partial<Record<RawDataType, DataConverterGen>>> = {
    "Line": LineConverters,
    "MultiLine": LineConverters,
    "AreaChart": LineConverters,

    "Bar": BarConverters,
    "StackedBar": BarConverters,

    "Scatter": ScatterConverters,
    "GroupedScatter": GroupedScatterConverters,

    "Bubble": BubbleConverters,
    "Radar": RadarConverters,
    "PolarArea": PolarAreaConverters,
    "Pie": PieConverters,
    "Doughnut": DoughnutConverters,
    "GroupedBar": GroupedBarConverters
}

var PointConverterMap: Record<string, IgetPointData> = {
    "Line": getScalePointData,
    "Bar": getScalePointData,
    "Pie": getScalePointData,
    "Doughnut": getScalePointData,
    "PolarArea": getScalePointData,
    "Radar": getScalePointData,
    "Bubble": getBubblePointData
}

const getDataConverter = (chartType: string, sourceType: RawDataType, options: ITransformOptions): ChartDataConverter<any> => {
    var srcType = sourceType || 'Array';
    var converterGen: DataConverterGen = dataMap[chartType]?.[srcType];
    if (converterGen)
        return converterGen(options);
    console.info('Data Converter not found ' + chartType + ':' + srcType);
    return NoopConverter;
}

const addDataConverter = (chartType: string, sourceType: string,
    converterGen: DataConverterGen): void => {
    if (!dataMap[chartType][sourceType])
        dataMap[chartType][sourceType] = converterGen;
    else {
        throw new Error("Converter already set for " + chartType + "/" + sourceType);
    }
}

const getPointConverter = (chartType: string): IgetPointData => {
    var converter: IgetPointData = PointConverterMap[chartType];
    return converter ? converter : (d) => { return d };
}

export type { DataConverterGen, IgetPointData };
export { getPointConverter, addDataConverter, getDataConverter };