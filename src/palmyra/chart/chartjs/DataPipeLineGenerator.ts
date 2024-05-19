
import { DataPipeLine, IAbstractChartOptions } from "../../react/Types";
import { getDataConverter } from "./DataConverterFactory";
import { getStyleConverter } from "./StyleConverterFactory";


const noop = (d: any) => d;

function getApplyStyleConverter(props: IAbstractChartOptions): (d: any) => any {
    const accessorOptions: any = props.accessorOptions || {};
    return getStyleConverter(props.type, props.styleOptions, accessorOptions)

}
function getConverter(props: IAbstractChartOptions): (d: any) => any {
    const accessorOptions: any = props.accessorOptions || {};
    return getDataConverter(props.type, 'Array', accessorOptions);
}

const generateDataPipeLine = (props: IAbstractChartOptions) => {
    const pipeLine: DataPipeLine = props.dataPipeLine || {};
    const preProcess = pipeLine.preProcess || noop;
    const postProcess = pipeLine.postProcess || noop;
    const applyStyle = pipeLine.applyStyle || getApplyStyleConverter(props);
    const convertData = pipeLine.convertData || getConverter(props);

    return (d: any) => {
        const pp = preProcess(d);
        const cd = convertData(pp);
        const as = applyStyle(cd);
        return postProcess(as);
    }
}

export { generateDataPipeLine };