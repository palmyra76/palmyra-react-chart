import { MutableRefObject, useImperativeHandle, useRef } from "react";
import { ChartType } from "../../Types";
import { IDynamicChart, IDynamicChartOptions } from "./Types";

interface IDynamicInput<T extends ChartType> extends IDynamicChartOptions {
    chartRef?: MutableRefObject<IDynamicChart<T>>,
}

const Dynamic = <T extends ChartType>(props: IDynamicInput<T>) => {

    const currentRef = props.chartRef || useRef<IDynamicChart<T>>();

    useImperativeHandle(currentRef, () => {
        return {
            setEndPointOptions(d: any) {

            },
            setFilter(filter: any) {

            },
            resetFilter() {

            },
            toggleLegend() {

            },
            showDataset() {

            },
            hideDataset() {

            },
            setAccessOptions(d: any) {

            },
            setStyleOptions(d: any) {

            },
            setChartOptions(d: any) {

            }
        }
    }, [])

    return (
        <div>Dynamic</div>
    )

}

export { Dynamic };