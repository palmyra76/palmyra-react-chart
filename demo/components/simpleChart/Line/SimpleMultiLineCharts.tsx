import { PalmyraStoreFactory } from "palmyra-wire";
import { MultiLineChart, MultiLineNamedChart } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    tension: 0.2,
    plugins: {
        title: {
            display: true,
            text: 'Multi Line Chart'
        },
        legend: {
            position: 'bottom'
        }
    }
};

const SimpleMultiLineCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<>
        <Dashboard storeFactory={storeFactory}>
            <div>
                Array
                <SimpleChart type="Line"
                    endPoint={'/simple/multiLineChartData/arrayData.json'}
                    styleOptions={MultiLineChart} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Array" }} />

                Keyed Object
                <SimpleChart type="Line" endPoint={'/simple/multiLineChartData/keyedObjectData.json'}
                    styleOptions={MultiLineChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Object" }} />

                KeylessObject
                <SimpleChart type="Line" endPoint={'/simple/multiLineChartData/objectChartData.json'}
                    chartOptions={chartOptions}
                    styleOptions={MultiLineNamedChart}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Object" }} />

            </div>
        </Dashboard>
    </>
    )
}

export default SimpleMultiLineCharts;