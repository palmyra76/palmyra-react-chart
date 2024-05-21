import { ITransformOptions, StyleOptions, ChartStyle, IDatasetStyleOptions } from "../../../Types";
import { DataSet, DataSetType, DataSets, IStyleConverterFactory } from "../../Types"
import { generateColor } from "../GenerateColors";
import { extractNamedOptions, extractOptions, getStyle } from "../util";


const ArrayStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {

    function processArray(ds: DataSet<DataSetType>, data: DataSets<DataSetType>, dataStyle: ChartStyle[]) {
        const length: number = dataStyle.length;
        const optionsProvided: any = extractOptions(dataStyle);

        optionsProvided.map((option) => {
            ds[option] = [];
        })
        if (ds.data) {
            ds.data.map((d, index) => {
                const i = index % length;
                const style: ChartStyle = dataStyle[i];
                optionsProvided.map((option) => {
                    ds[option].push(style?.[option]);
                })
            })
        }
    }

    function processNamed(ds: DataSet<DataSetType>, data: DataSets<DataSetType>, dataStyle: Record<string, ChartStyle>) {
        const optionsProvided: any = extractNamedOptions(dataStyle);

        optionsProvided.map((option) => {
            ds[option] = [];
        })

        if (ds.data) {
            ds.data.map((d, index) => {
                const key = data.labels[index];
                const style: ChartStyle = dataStyle[key];
                optionsProvided.map((option) => {
                    const v = (style?.[option]);
                    if(undefined != v )
                        ds[option][index] = (style?.[option]);
                    else if(option.includes('Color')){
                        ds[option][index] = generateColor();
                    }
                })
            })
        }
    }

    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == styleOptions || null == data || undefined == data)
            return data;

        if (!data)
            return;

        if (data.datasets) {
            data.datasets.map((ds, index) => {
                const dataSetStyle: IDatasetStyleOptions = getStyle(styleOptions, index, data.labels?.[index]);
                const dataStyle: any = dataSetStyle.style;

                if (dataStyle instanceof Array) {
                    processArray(ds, data, dataStyle);
                } else {
                    processNamed(ds, data, dataStyle);
                }
            })
        }
        return data;
    }
}

export { ArrayStyleConverterFactory }
