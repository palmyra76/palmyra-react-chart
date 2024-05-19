import { useImperativeHandle, useRef } from "react";
import { IStaticChart, IStaticChartOptions } from "../Types";
import { ChartType } from "../../chart";


const StaticChart = <T extends ChartType>(props: IStaticChartOptions<T>) => {

    const currentRef = props.chartRef || useRef<IStaticChart<T>>();


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

export { StaticChart };