import { MutableRefObject, useImperativeHandle, useRef } from "react";
import { IDashBoardChart, IDashboardOptions } from "./Types";
import { ChartType } from "../../Types";

interface IDashboardInput<T extends ChartType> extends IDashboardOptions {
    chartRef?: MutableRefObject<IDashBoardChart<T>>
}

const Dashboard = <T extends ChartType>(props: IDashboardInput<T>) => {

    const currentRef = props.chartRef || useRef<IDashBoardChart<T>>();


    useImperativeHandle(currentRef, () => {
        return {
            setRefreshOptions(refresh) {

            }
        }
    }, [])

    return (
        <div>Dashboard</div>
    )

}

export { Dashboard };