import { PalmyraStoreFactory } from "palmyra-wire";
import { lineArrayChartStyles, scatterChartStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import { ScatterChart } from "../../../../src/palmyra/react/chart/ScatterChart";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    // indexAxis: 'y',
    plugins: {
        title: {
            text: "Scatter Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
    },
    scales: {
        x: {
            type: 'linear',
        }
    }
};

const SimpleScatterCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Scatter Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                {/* <SimpleChart type="Scatter"
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/multiLineChartData/arrayData.json'}
                    styleOptions={lineArrayChartStyles}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'count', yKey: 'min', yLabel: 'Data Set', sourceType: "Array" }}
                /> */}
                <ScatterChart
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/multiLineChartData/arrayData.json'}
                    style={scatterChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'count', yKey: 'min', yLabel: 'Data Set', sourceType: "Array" }}
                />
                {/* <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <SimpleChart endPoint={'/simple/multiLineChartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Scatter" styleOptions={arrayChartStyles}
                    chartOptions={chartOptions}
                    accessorOptions={{ yKey: 'min', yLabel: 'Data Set', sourceType: "Object" }} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <SimpleChart endPoint={'/simple/multiLineChartData/objectChartData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Scatter" chartOptions={chartOptions}
                    // styleOptions={arrayChartStyles}
                    accessorOptions={{ xKey: 'count', yKey: 'min', sourceType: "Object" }} /> */}

            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleScatterCharts;