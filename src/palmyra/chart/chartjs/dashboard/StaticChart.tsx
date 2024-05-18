import { MutableRefObject, useImperativeHandle, useRef } from "react";
import { ChartType } from "../../Types";
import { IStaticChart, IStaticChartOptions } from "./Types";

interface IStaticInput<T extends ChartType> extends IStaticChartOptions {
    chartRef?: MutableRefObject<IStaticChart<T>>,
    chartData: any
}

interface IStaticChartInput<T extends ChartType> extends IStaticChart<T> {
    setData?: (data: any) => void,
}

const Static = <T extends ChartType>(props: IStaticInput<T>) => {

    const currentRef = props.chartRef || useRef<IStaticChartInput<T>>();


    useImperativeHandle(currentRef, () => {
        return {
            toggleLegend() {

            },
            showDataset() {

            },
            hideDataset() {

            },
            setData(d: any) {

            }
        }
    }, [])

    return (
        <div>Static</div>
    )

}

export { Static };