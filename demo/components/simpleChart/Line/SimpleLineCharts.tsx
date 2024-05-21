import { PalmyraStoreFactory } from "palmyra-wire";
import { MultiLineChart, lineChart } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    tension: 0.2,
    plugins: {
        title: {
            display: true,
            text: 'Line Chart'
        },
        legend: {
            position: 'bottom'
        }
    }
};

const SimpleLineCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<>
        <Dashboard storeFactory={storeFactory}>
            <div>
                Array
                <SimpleChart type="Line"
                    endPoint={'/simple/linechartData/arrayData.json'}
                    styleOptions={lineChart} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: 'count', yLabel: "Count", sourceType: "Array" }} />

                MulitLine
                <SimpleChart type="Line"
                    endPoint={'/simple/linechartData/arrayData.json'}
                    styleOptions={MultiLineChart} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Array" }} />

                KeyValue
                <SimpleChart type="Line" endPoint={'/simple/linechartData/keyValueData.json'}
                    styleOptions={lineChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "KeyValue" }} />

                Keyed Object
                <SimpleChart type="Line" endPoint={'/simple/linechartData/keyedObjectData.json'}
                    styleOptions={lineChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ yKey: 'count', sourceType: "Object" }} />

                KeylessObject
                <SimpleChart type="Line" endPoint={'/simple/linechartData/objectChartData.json'}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} />
            </div>
        </Dashboard>
    </>
    )
}

export default SimpleLineCharts;