import { ITransformOptions, StyleOptions, ChartStyle } from "../../../Types";
import { DataSetType, DataSets, IStyleConverterFactory } from "../../Types"


const ArrayStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == styleOptions || null == data || undefined == data)
            return data;

        if (!data)
            return;

        const chartStyle: any = styleOptions.style;
        const optionsProvided: any = extractOptions(chartStyle);        
        // @ts-ignore
        const length: number = chartStyle.length;

        if (data.datasets) {
            data.datasets.map((ds) => {
                optionsProvided.map((option) => {
                    ds[option] = [];
                })
                if (ds.data) {
                    ds.data.map((d, index) => {
                        const i = index % length;
                        const style: ChartStyle = chartStyle[i];
                        optionsProvided.map((option) => {
                            ds[option].push(style?.[option]);
                        })
                    })
                }
            })
        }
        return data;
    }
}

export { ArrayStyleConverterFactory }

function extractOptions(chartStyle: ChartStyle[]) {
    const cache: any = {};
    const result: string[] = [];
    chartStyle.map((s) => {
        Object.keys(s).map((k) => {
            if (!cache[k]) {
                result.push(k);
                cache[k] = true;
            }
        })
    })
    return result;
}
