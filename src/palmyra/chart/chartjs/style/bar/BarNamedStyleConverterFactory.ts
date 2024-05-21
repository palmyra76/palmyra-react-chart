import { ChartStyle, DataSetType, DataSets, IStyleConverterFactory, ITransformOptions, StyleOptions } from "../../..";
import generateColors from "../GenerateColors";


// TODO - To be tested throughly

const BarNamedStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == data || undefined == data)
            return data;

        if (data.labels) {
            const backgroundColor: any[] = generateColors(data.labels.length);
            const borderColor: any[] = generateColors(data.labels.length);
            let borderWidth: any;
            let barThickness: any;

            const chartStyle = styleOptions.style;

            data.labels.map((label, index) => {
                const style: ChartStyle = chartStyle[label];
                if (style) {
                    if (style.backgroundColor)
                        backgroundColor[index] = style.backgroundColor;
                    if (style.borderColor)
                        borderColor[index] = style.borderColor;             
                }
            })

            if (data.datasets[0]) {
                data.datasets[0].backgroundColor = backgroundColor;
                data.datasets[0].borderColor = borderColor;
                data.datasets[0].borderWidth = borderWidth;
                data.datasets[0].barThickness = barThickness;
            }
        }
        return data;
    }
}

export { BarNamedStyleConverterFactory }