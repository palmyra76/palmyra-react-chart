import { PalmyraStoreFactory } from "palmyra-wire";
import { arrayChartStyles, namedChartStyles, namedDataChartStyles } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import { DoughnutChart } from "../../../../src/palmyra/react/chart/DoughnutChart";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: "Doughnut Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
    }
};

const SimpleDoughnutCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Doughnut Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                {/* <SimpleChart type="Doughnut"
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/chartData/arrayData.json'}
                    styleOptions={namedChartStyles}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{
                        xKey: 'name', yKey: 'count', yLabel: 'Data Set', sourceType: "Array",
                        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
                    }} /> */}
                <DoughnutChart
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/chartData/arrayData.json'}
                    style={namedDataChartStyles}
                    plugins={[ChartDataLabels]}
                    accessor={{
                        xKey: 'name', yKey: 'count', yLabel: 'Data Set', sourceType: "Array",
                        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
                    }} />
                <div className="h2-container"><span className="h2">Key Value</span></div>
                <SimpleChart endPoint={'/simple/chartData/keyValueData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Doughnut" styleOptions={namedChartStyles}
                    chartOptions={chartOptions}
                    accessorOptions={{ xKey: 'Name', yKey: 'Count', xLabel: 'Name', yLabel: 'Count', sourceType: "KeyValue" }} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <SimpleChart endPoint={'/simple/chartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Doughnut" styleOptions={arrayChartStyles}
                    chartOptions={chartOptions}
                    accessorOptions={{ yKey: 'count', sourceType: "Object" }} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <SimpleChart endPoint={'/simple/chartData/objectChartData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Doughnut" chartOptions={chartOptions}
                    // styleOptions={arrayChartStyles}
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} />

            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleDoughnutCharts;