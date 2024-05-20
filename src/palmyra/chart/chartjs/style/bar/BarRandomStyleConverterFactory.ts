import { StyleOptions } from "../../../Types";
import { DataSet, DataSetType, DataSets, IStyleConverterFactory } from "../../Types"
import generateColors from "../GenerateColors";

const BarRandomStyleConverterFactory: IStyleConverterFactory = (o: StyleOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == data || undefined == data)
            return data;

        data.datasets?.map((dataset: DataSet<DataSetType>) => {
            dataset.backgroundColor = generateColors(data.labels.length);
            dataset.borderColor = generateColors(data.labels.length);
        })
        return data;
    }
}

export { BarRandomStyleConverterFactory }