import { PalmyraStoreFactory } from "palmyra-wire";
import { lineChart } from "./chartColors";
import { Dashboard, SimpleChart } from "../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    // fill: {
    //     target: 'origin',
    //     above: 'rgba(220,53,69,0.5)',
    //     below: 'rgba(255,193,7,0.5)'
    // },
    tension: 0.2,
    plugins: {
        title: {
            text: "Line Chart"
        },
        legend: {
            position: 'bottom'
        },
        datalabels: { // datalabels style
            anchor: 'end',
            align: 'end',
            offset: -4
        }
    },
    scales: {
        x: {
            grid: {
                display: true
            }
        },
        y: {
            grid: {
                display: true
            }
        }
    }
};

const SimpleLineCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<>
        <div>Simple Line Chart</div>
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
                    styleOptions={lineChart} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Array" }} />

                {/* KeyValue
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
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} /> */}
            </div>
        </Dashboard>
    </>
    )
}

export default SimpleLineCharts;