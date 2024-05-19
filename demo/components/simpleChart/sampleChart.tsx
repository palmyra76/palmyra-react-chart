import { PalmyraStoreFactory } from "palmyra-wire";
import { barChart } from "./chartColors";
import { SimpleChart } from "../../../src/palmyra/react";

const SampleChart = () => {

    const store = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' }).getChartStore({}, '/simple/barChartData.json');


    return (
        <SimpleChart endPoint={'/simple/barChartData.json'}
            type="Bar" store={store} styleOptions={barChart}
            accessorOptions={{ xKey: 'name', yKey: 'count' }} />
    )
}

export default SampleChart;