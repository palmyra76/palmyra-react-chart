import { PalmyraStoreFactory } from "palmyra-wire";
import { lineArrayChartStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import TabX from "../../../components/tab/TabX";
import { ArrayDataConfig } from "../../../pages/config/bubbleChartConfig/BubbleChartDataConfig";
import { ArrayComponentSetup } from "../../../pages/config/bubbleChartConfig/BubbleChartConfig";
import { BubbleChart } from "../../../../src/palmyra/react/chart/BubbleChart";
import { ArrayStyleConfig } from "../../../pages/config/lineChartComponent/LineChartStyleConfig";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: "Bubble Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
    }
};

const SimpleBubbleCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Bubble Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                <BubbleChart
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/chartData/bubbleChartData/arrayData.json'}
                    style={lineArrayChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'average', yKey: 'value', xLabel: 'month', rKey: 'top', yLabel: 'Data Set', sourceType: "Array" }} />

                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[ArrayDataConfig, ArrayComponentSetup, ArrayStyleConfig]} />

                {/* <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <SimpleChart endPoint={'/simple/bubbleChartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Bubble" styleOptions={lineArrayChartStyles}
                    chartOptions={chartOptions}
                    accessorOptions={{ yKey: 'count', rKey: 'top', sourceType: "Object" }} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <SimpleChart endPoint={'/simple/bubbleChartData/objectChartData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Bubble" chartOptions={chartOptions}
                    // styleOptions={arrayChartStyles}
                    accessorOptions={{ xKey: 'average', yKey: 'count', rKey: 'top', sourceType: "Object" }} /> */}
            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleBubbleCharts;