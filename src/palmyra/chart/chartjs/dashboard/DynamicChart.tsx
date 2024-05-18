import { useImperativeHandle, useRef } from "react";
import { ChartType } from "../../Types";
import { IDynamicChart, IDynamicChartOptions } from "./Types";
import { IEndPointOptions } from "palmyra-wire";

const Dynamic = <T extends ChartType>(props: IDynamicChartOptions<T>) => {

    const currentRef = props.chartRef || useRef<IDynamicChart<T>>();

    useImperativeHandle(currentRef, () => {
        return {
            setEndPointOptions(d: IEndPointOptions) {

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
            setAccessorOptions(d: any) {

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