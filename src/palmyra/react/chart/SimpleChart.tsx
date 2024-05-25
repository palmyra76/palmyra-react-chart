import { useEffect, useImperativeHandle, useRef } from "react";
import { IChartJS, ISimpleChart, ISimpleChartOptions } from "../Types";
import { ChartType } from "../../chart";
import { useChartQuery } from "../hooks/useChartQuery";
import { AbstractChartJS } from "./AbstractChartJS";
import ErrorBoundary from "../ErrorBoundary";


const SimpleChart = <T extends ChartType>(props: ISimpleChartOptions<T>) => {
    const currentRef = props.chartRef || useRef<ISimpleChart<T>>();

    const chartJsRef = useRef<IChartJS>(null);

    const onData = (d: any) => {
        if (null != chartJsRef.current) {
            chartJsRef.current.setData(d);
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
        <ErrorBoundary errorMessage={"Error while rendering " + props.type + " chart"}>
            <div>
                <AbstractChartJS type={props.type} chartJsRef={chartJsRef}
                    styleOptions={props.styleOptions} accessorOptions={props.accessorOptions}
                    dataPipeLine={props.dataPipeLine} guideLine={props.guideLine}
                    chartOptions={props.chartOptions} plugins={props.plugins}
                    onAreaSelect={props.onAreaSelect} onPointClick={props.onPointClick}
                ></AbstractChartJS>
            </div>
        </ErrorBoundary>
    )

}

export { SimpleChart };