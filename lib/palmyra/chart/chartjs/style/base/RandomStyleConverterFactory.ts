import { StyleOptions } from "../../../Types";
import { DataSet, DataSetType, DataSets, IStyleConverterFactory } from "../../Types"
import generateColors from "../GenerateColors";

const RandomStyleConverterFactory: IStyleConverterFactory = (o: StyleOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == data || undefined == data)
            return data;

        data.datasets?.map((dataset: DataSet<DataSetType>) => {
            dataset.backgroundColor = generateColors(1);
            dataset.borderColor = generateColors(1);
        })
        return data;
    }
}

const NoopStyleConverterFactory: IStyleConverterFactory = () => {
    return (d: DataSets<DataSetType>) => {
        return d;
    }
}

export { RandomStyleConverterFactory, NoopStyleConverterFactory }