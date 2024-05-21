import { useEffect, useImperativeHandle, useRef } from "react";
import { ISimpleChart, ISimpleChartOptions } from "../Types";
import { generateDataPipeLine } from "../../chart/chartjs/DataPipeLineGenerator";
import { ChartType } from "../../chart";
import { useChartQuery } from "../hooks/useChartQuery";
import { AbstractChartJS } from "./AbstractChartJS";
import { IChartJS } from "./Types";

const SimpleChart = <T extends ChartType>(props: ISimpleChartOptions<T>) => {
    const currentRef = props.chartRef || useRef<ISimpleChart<T>>();
    const pipeLine = generateDataPipeLine(props);
    const chartJsRef = useRef<IChartJS>(null);

    const onData = (d: any) => {
        if (null != chartJsRef.current) {
            const chartData = pipeLine(d);
            chartJsRef.current.setData(chartData);
        }
    }

    const { fetch, setFilter, setEndPointVars } = useChartQuery(props, {
        onData
    });

    useImperativeHandle(currentRef, () => {
        return {
            setEndPointOptions(d: any) {
                setEndPointVars(d)
            },
            setFilter(filter: any) {
                setFilter(filter);
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

    useEffect(() => {
        fetch()
    }, []);

    return (
        <div>
            <AbstractChartJS type={props.type} chartRef={chartJsRef} options={props.chartOptions} plugins={props.plugins}
                onAreaSelect={props.onAreaSelect} onPointClick={props.onPointClick} 
            ></AbstractChartJS>
        </div>
    )

}

export { SimpleChart };