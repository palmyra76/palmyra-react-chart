import { PalmyraStoreFactory } from "palmyra-wire";
import { barArrayChart, barChart } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: "Bar Chart"
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
            stacked: true,
            grid: {
                display: false
            }
        },
        y: {
            stacked: true,
            grid: {
                display: false
            }
        }
    }
};

const SimpleBarCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<>
        <div>Simple Bar Chart</div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                Array
                <SimpleChart type="Bar"
                    endPoint={'/simple/barchartData/barChartData.json'}
                    styleOptions={barArrayChart} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Array" }} />

                KeyValue
                <SimpleChart endPoint={'/simple/barchartData/barKeyValueData.json'}
                    type="Bar" styleOptions={barChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'Name', yKey: 'Count', xLabel: 'Name', yLabel: 'Count', sourceType: "KeyValue" }} />

                Keyed Object
                <SimpleChart endPoint={'/simple/barchartData/barKeyedObjectData.json'}
                    type="Bar" styleOptions={barArrayChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ yKey: 'count', sourceType: "Object" }} />

                KeylessObject
                <SimpleChart endPoint={'/simple/barchartData/barObjectChartData.json'}
                    type="Bar" chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} />
            </div>
        </Dashboard>
    </>
    )
}

export default SimpleBarCharts;