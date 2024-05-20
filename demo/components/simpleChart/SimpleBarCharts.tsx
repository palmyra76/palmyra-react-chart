import { PalmyraStoreFactory } from "palmyra-wire";
import { barArrayChart, barChart } from "./chartColors";
import { Dashboard, SimpleChart } from "../../../src/palmyra/react";
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

const SimpleBarCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<>
        <div>Simple Bar Chart</div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                Array
                <SimpleChart type="Bar"
                    endPoint={'/simple/barchartData/barChartData.json'}
                    styleOptions={barChart} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Array" }} />

                KeyValue
                <SimpleChart endPoint={'/simple/barchartData/barKeyValueData.json'}
                    type="Bar" styleOptions={barArrayChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "KeyValue" }} />

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

                {/* Key Object
            <SimpleChart endPoint={'/simple/barchartData/barObjectChartData.json'}
                type="Bar" storeFactory={storeFactory} styleOptions={barArrayChart}
                plugins={[ChartDataLabels]}
                accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Custom" }} /> */}


                {/* Grouped
                <SimpleChart endPoint={'/simple/barchartData/GroupBarChartData.json'}
                    type="GroupedBar" styleOptions={barArrayChart}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Array"
                    }} /> */}
            </div>
        </Dashboard>
    </>
    )
}

export default SimpleBarCharts;