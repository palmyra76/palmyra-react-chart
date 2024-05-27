import { PalmyraStoreFactory } from "palmyra-wire";
import { arrayChartStyles, namedChartStyles, namedDataChartStyles } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import { RadarChart } from "../../../../src/palmyra/react/chart/RadarChart";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    // indexAxis: 'y',
    plugins: {
        title: {
            text: "Radar Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
    }
};

const SimpleRadarCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Radar Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>

                <div className="h2-container"><span className="h2">Array</span></div>
                {/* <SimpleChart type="Radar"
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/chartData/arrayData.json'}
                    styleOptions={namedChartStyles} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessorOptions={{
                        xKey: 'name', yKey: 'count', yLabel: 'Data Set', sourceType: "Array",
                        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
                    }} /> */}
                <RadarChart
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/chartData/arrayData.json'}
                    style={namedDataChartStyles} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessor={{
                        xKey: 'name', yKey: 'count', yLabel: 'Data Set', sourceType: "Array",
                        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
                    }} />
                <div className="h2-container"><span className="h2">Key Value</span></div>
                <SimpleChart endPoint={'/simple/chartData/keyValueData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Radar" styleOptions={namedChartStyles}
                    chartOptions={chartOptions}
                    accessorOptions={{ xKey: 'Name', yKey: 'count', yLabel: 'Data Set', sourceType: "KeyValue" }} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <SimpleChart endPoint={'/simple/chartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Radar" styleOptions={arrayChartStyles}
                    chartOptions={chartOptions}
                    accessorOptions={{ yKey: 'count', yLabel: 'Data Set', sourceType: "Object" }} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <SimpleChart endPoint={'/simple/chartData/objectChartData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Radar" chartOptions={chartOptions}
                    // styleOptions={arrayChartStyles}
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} />

            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleRadarCharts;