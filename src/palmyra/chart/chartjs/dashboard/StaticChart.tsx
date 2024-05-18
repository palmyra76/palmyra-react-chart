import { useImperativeHandle, useRef } from "react";
import { ChartType } from "../../Types";
import { IStaticChart, IStaticChartOptions } from "./Types";


const Static = <T extends ChartType>(props: IStaticChartOptions<T>) => {

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

export { Static };