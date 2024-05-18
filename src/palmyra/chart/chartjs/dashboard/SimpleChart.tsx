import { useImperativeHandle, useRef } from "react";
import { ChartType } from "../../Types";
import { ISimpleChart, ISimpleChartOptions } from "./Types";

const Simple = <T extends ChartType>(props: ISimpleChartOptions<T>) => {
    const currentRef = props.chartRef || useRef<ISimpleChart<T>>();

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

            }
        }
    }, [])

    return (
        <div>Simple</div>
    )

}

export { Simple };