import { ITransformOptions, StyleOptions, ChartStyle } from "../../../Types";
import { DataSet, DataSetType, DataSets, IStyleConverterFactory } from "../../Types"
import generateColors from "../GenerateColors";

const LabelStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == data || undefined == data)
            return data;

        data.datasets?.map((dataset: DataSet<DataSetType>) => {
            const key = dataset.key;
            const style: ChartStyle = styleOptions[key];
            if (style) {
                dataset.backgroundColor = style.backgroundColor || generateColors(1);
                dataset.borderColor = style.borderColor || generateColors(1);
            } else {
                dataset.backgroundColor = generateColors(1);
                dataset.borderColor = generateColors(1);
            }
        })
        return data;
    }
}

export { LabelStyleConverterFactory }