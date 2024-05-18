import { useEffect, useImperativeHandle, useRef } from "react";
import { ChartType } from "../../Types";
import { ISimpleChart, ISimpleChartOptions } from "./Types";
import { useChartQuery } from "../../wire/useChartQuery";
import { generateDataPipeLine } from "./DataPipeLineGenerator";

const Simple = <T extends ChartType>(props: ISimpleChartOptions<T>) => {
    const currentRef = props.chartRef || useRef<ISimpleChart<T>>();

    const { fetch, setFilter, data, setEndPointVars } = useChartQuery(props)

    const pipeLine = generateDataPipeLine(props);

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
    
    console.log(pipeLine(data));

    return (
        <div>Simple</div>
    )

}

export { Simple };