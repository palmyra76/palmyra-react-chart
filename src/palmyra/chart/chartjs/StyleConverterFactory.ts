import { default as LineConverters } from './style/LineStyleConverter';
import { default as BarConverters } from './style/BarStyleConverter';
import { default as GroupedBarConverters } from './style/GroupedBarConverter'
import { default as ScatterConverters } from './style/ScatterConverter';
import { default as GroupedScatterConverters } from './style/GroupedScatterConverter';
import { default as BubbleConverters } from './style/BubbleStyleConverter';
import { default as RadarConverters } from './style/RadarConverter';
import { default as PolarAreaConverters } from './style/PolarConverter';
import { default as PieConverters } from './style/PieStyleConverter';

import { ChartType, ITransformOptions } from '../Types';
import { ChartDataConverter, IStyleConverterFactory, StyleOptions, StyleType } from '..';
import { NoopStyleConverterFactory } from './style/base/RandomStyleConverterFactory';


var dataMap: Record<ChartType, Partial<Record<StyleType, IStyleConverterFactory>>> = {
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
    "Doughnut": PieConverters,
    "GroupedBar": GroupedBarConverters
}


const getStyleType = (styleOptions: StyleOptions): StyleType => {
    //@ts-ignore
    const type: StyleType = styleOptions?.type;
    if (type)
        return type;

    //@ts-ignore
    const style = styleOptions?.style || styleOptions;
    if (!style)
        return 'Random';

    if (style instanceof Array) {
        return 'Array';
    }

    if (typeof (style) == 'object') {
        const keys = Object.keys(style);
        if (keys.length > 0)
            return 'Named';
    }

    return 'Noop';
}

const getStyleConverter = (chartType: ChartType, styleOptions: StyleOptions, options: ITransformOptions): ChartDataConverter<any> => {
    const styleType = getStyleType(styleOptions);
    var converterGen: IStyleConverterFactory = dataMap[chartType]?.[styleType] || NoopStyleConverterFactory;
    return converterGen(styleOptions, options);
}

export { getStyleConverter };