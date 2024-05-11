import { ChartStyle, DataSetType, DataSets, IStyleConverterFactory, ITransformOptions, StyleOptions, StyleType } from "../..";
import { NoopStyleConverterFactory, RandomStyleConverterFactory } from "./base/RandomStyleConverterFactory";
import { assignStyles } from "./util";


function getStyle(styleOptions: StyleOptions, dataset, index, labels): ChartStyle {
    const label = labels ? labels[index] : '';
    return styleOptions[label] || styleOptions[dataset.label] || styleOptions[dataset.key] || styleOptions[index];
}


const DatasetStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == data || undefined == data)
            return data;

        data.datasets.map((d, index) => {
            const style = getStyle(styleOptions, d, index, data.labels)
            assignStyles(d, style);
        });
        return data;
    }
}

const converters: Partial<Record<StyleType, IStyleConverterFactory>> = {
    "Array": DatasetStyleConverterFactory,
    "Named": DatasetStyleConverterFactory,
    "Random": RandomStyleConverterFactory,
    "Noop": NoopStyleConverterFactory
}

export default converters;