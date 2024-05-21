import { ITransformOptions, StyleOptions, ChartStyle } from "../../../Types";
import { DataSetType, DataSets, IStyleConverterFactory } from "../../Types"


const ArrayStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == styleOptions || null == data || undefined == data)
            return data;

        if (!data)
            return;

        const chartStyle = styleOptions.style;

        // @ts-ignore
        const length: number = chartStyle.length;

        if (data.datasets) {
            data.datasets.map((ds) => {
                ds.backgroundColor = [];
                ds.borderColor = [];
                ds.borderWidth = [];
                if (ds.data) {
                    ds.data.map((d, index) => {
                        const i = index % length;
                        const style: ChartStyle = chartStyle[i];
                        ds.backgroundColor.push(style?.backgroundColor)
                        ds.borderColor.push(style?.borderColor);
                    })
                }
            })
        }
        return data;
    }
}

export { ArrayStyleConverterFactory }