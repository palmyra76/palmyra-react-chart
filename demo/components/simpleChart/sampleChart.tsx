import { PalmyraStoreFactory } from "palmyra-wire";
import { Simple } from "../../../src/palmyra/chart/chartjs/dashboard";
import { barChart } from "./chartColors";

const SampleChart = () => {

    const store = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' }).getChartStore({}, '/simple/barChartData.json');


    return (
        <Simple endPoint={'/simple/barChartData.json'} type="Bar" store={store} styleOptions={barChart} accessorOptions={{xKey: 'name'}}/>
    )
}

export default SampleChart;