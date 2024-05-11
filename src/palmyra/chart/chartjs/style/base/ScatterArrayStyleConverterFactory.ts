import { DataSetType, DataSets, IStyleConverterFactory, ITransformOptions, StyleOptions } from "../../..";
import { assignStyles } from "../util";


// TODO - To be tested throughly

const ScatterArrayStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {        
        if (null == data || undefined == data)
            return data;

        data.datasets.map((d, index) => {
            const style = styleOptions[d.key] || styleOptions[index];
            assignStyles(d, style);
        });
        return data;
    }
}

export { ScatterArrayStyleConverterFactory }