import { useImperativeHandle, useRef } from "react";
import { IDashBoard, IDashboardOptions } from "../Types";
import { ChartStoreFactoryContext } from "../ChartLayoutContext";


const Dashboard = (props: IDashboardOptions) => {
    const currentRef = props.chartRef || useRef<IDashBoard>();
    // TODO - get chartstorefactory from props  or  context
    const storeFactory = props.storeFactory;

    useImperativeHandle(currentRef, () => {
        return {
            setRefreshOptions(refresh) {
                console.log('Dashboard refresh called');
            }
        }
    }, [])

    return (
        <ChartStoreFactoryContext.Provider value={storeFactory}>
            <div>Dashboard</div>
        </ChartStoreFactoryContext.Provider>        
    )
}

export { Dashboard };