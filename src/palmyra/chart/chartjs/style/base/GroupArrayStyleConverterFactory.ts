import { ITransformOptions, StyleOptions } from "../../../Types";
import { DataSetType, DataSets, IStyleConverterFactory } from "../../Types"
import { assignStyles } from "../util";

const GroupArrayStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
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

export { GroupArrayStyleConverterFactory }