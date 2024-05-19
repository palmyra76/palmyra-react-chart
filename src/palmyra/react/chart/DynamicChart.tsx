import { useImperativeHandle, useRef } from "react";
import { IDynamicChart, IDynamicChartOptions } from "../Types";
import { IEndPointOptions } from "palmyra-wire";
import { ChartType } from "../../chart";

const DynamicChart = <T extends ChartType>(props: IDynamicChartOptions<T>) => {

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

export { DynamicChart };