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

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Multi Line Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                <SimpleChart type="MultiLine"
                    onPointClick={(d) => console.log(d)}
                    endPoint={'/simple/multiLineChartData/arrayData.json'}
                    styleOptions={MultiLineChart} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Array" }} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <SimpleChart type="MultiLine" endPoint={'/simple/multiLineChartData/keyedObjectData.json'}
                    onPointClick={(d) => console.log(d)}
                    styleOptions={MultiLineChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Object" }} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <SimpleChart type="MultiLine" endPoint={'/simple/multiLineChartData/objectChartData.json'}
                    onPointClick={(d) => console.log(d)}
                    chartOptions={chartOptions}
                    styleOptions={MultiLineNamedChart}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Object" }} />

            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleMultiLineCharts;