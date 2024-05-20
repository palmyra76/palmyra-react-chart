import { useImperativeHandle, useRef } from "react";
import { IStaticChart, IStaticChartOptions } from "../Types";
import { ChartType } from "../../chart";
import { AbstractChartJS } from "./AbstractChartJS";
import { IChartJS } from "./Types";


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
            <AbstractChartJS type={props.type} chartRef={chartJsRef} options={props.chartOptions} plugins={props.plugins}
                onAreaSelect={props.onAreaSelect} onPointClick={props.onPointClick} verbose={props.verbose} chartData={props.chartData}
            ></AbstractChartJS>
        </div>
    )

}

export { StaticChart };