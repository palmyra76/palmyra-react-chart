import { PalmyraStoreFactory } from "palmyra-wire";
import { MultiLineArrayChartStyles } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import TabX from "../../../components/tab/TabX";
import { ArrayComponentSetup, KeyedObjectComponentSetup, KeylessObjectComponentSetup } from "../../../pages/config/lineChartComponent/MultiLineChartConfig";
import { MultiLineChart } from "../../../../src/palmyra/react/chart/MultiLineChart";
import { KeyedObjectChartDataConfig, KeylessObjectChartDataConfig, arrayDataConfig } from "../../../pages/config/lineChartComponent/MultiLineChartDataConfig";
import { ArrayStyleConfig } from "../../../pages/config/lineChartComponent/MultiLineChartStyleConfig";


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
                <MultiLineChart
                    onPointClick={(d) => console.log(d)}
                    endPoint={'/simple/multiLineChartData/arrayData.json'}
                    style={MultiLineArrayChartStyles} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'name', xLabel: 'Name', yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Array" }} />
                <TabX labels={['Setup', 'Chart Data', 'Style Options']} Children={[ArrayComponentSetup, arrayDataConfig, ArrayStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <MultiLineChart endPoint={'/simple/multiLineChartData/keyedObjectData.json'}
                    onPointClick={(d) => console.log(d)}
                    style={MultiLineArrayChartStyles}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{ yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Object" }} />
                <TabX labels={['Setup', 'Chart Data', 'Style Options']} Children={[KeyedObjectComponentSetup, KeyedObjectChartDataConfig, ArrayStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <MultiLineChart endPoint={'/simple/multiLineChartData/objectChartData.json'}
                    onPointClick={(d) => console.log(d)}
                    chartOptions={chartOptions}
                    style={MultiLineArrayChartStyles}
                    plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'name', xLabel: 'Name', yKey: ['count', 'min'], yLabel: ["Total", "Minimum"], sourceType: "Object" }} />
                <TabX labels={['Setup', 'Chart Data', 'Style Options']} Children={[KeylessObjectComponentSetup, KeylessObjectChartDataConfig, ArrayStyleConfig]} />

            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleMultiLineCharts;