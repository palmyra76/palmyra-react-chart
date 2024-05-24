import { useImperativeHandle, useRef } from "react";
import { IChartJS, IStaticChart, IStaticChartOptions } from "../Types";
import { ChartType } from "../../chart";
import { AbstractChartJS } from "./AbstractChartJS";


const StaticChart = <T extends ChartType>(props: IStaticChartOptions<T>) => {

    const chartJsRef = useRef<IChartJS>(null);
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
        <div>
            <AbstractChartJS type={props.type} chartJsRef={chartJsRef}
                guideLine={props.guideLine} chartOptions={props.chartOptions}
                plugins={props.plugins} onAreaSelect={props.onAreaSelect}
                onPointClick={props.onPointClick}
            ></AbstractChartJS>
        </div>
    )

}

export { StaticChart };