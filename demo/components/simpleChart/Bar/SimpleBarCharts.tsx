import { PalmyraStoreFactory } from "palmyra-wire";
import { namedChartStyle, arrayChartStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import TabX from "../../tab/TabX";
import { Api as ArrayApi, Setup as ArraySetup, StyleOptions as ArrayStyle } from "../../../pages/barCharts/config/BarArrayConfig";
import { Api as KeyValueApi, Setup as KeyValueSetup, StyleOptions as KeyValueStyle } from "../../../pages/barCharts/config/BarKeyValueConfig";
import { Api as KeyObjApi, Setup as KeyObjSetup, StyleOptions as KeyObjStyle } from "../../../pages/barCharts/config/BarKeyedObjConfig";
import { Api as KeyLessObjApi, Setup as KeyLessObjSetup, StyleOptions as KeyLessObjStyle } from "../../../pages/barCharts/config/BarKeyLessObjConfig";
import { BarChart } from "../../../../src/palmyra/react/chart/BarChart";
import ChartToastify from "../ChartToastify";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    // indexAxis: 'y',
    plugins: {
        title: {
            text: "Bar Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
        datalabels: { // datalabels style
            anchor: 'end',
            align: 'end',
            offset: -4
        },
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
    },
    barThickness: 70
};

const SimpleBarCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Bar Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>

                <div className="h2-container"><span className="h2">Array</span></div>
                <BarChart
                    endPoint={'/simple/chartData/arrayData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={namedChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'name', yKey: 'count', yLabel: 'Data Set', sourceType: "Array" }} />
                <TabX labels={['Setup', 'Chart Data', 'Style Options']} Children={[ArraySetup, ArrayApi, ArrayStyle]} />

                <div className="h2-container"><span className="h2">Key Value</span></div>
                <BarChart endPoint={'/simple/chartData/keyValueData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Bar"
                    style={namedChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'Name', yKey: 'Count', xLabel: 'Name', yLabel: 'Count', sourceType: "KeyValue" }} />
                <TabX labels={['Setup', 'Chart Data', 'Style Options']} Children={[KeyValueSetup, KeyValueApi, KeyValueStyle]} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <BarChart endPoint={'/simple/chartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Bar"
                    style={arrayChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{ yKey: 'count', sourceType: "Object" }} />
                <TabX labels={['Setup', 'Chart Data', 'Style Options']} Children={[KeyObjSetup, KeyObjApi, KeyObjStyle]} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <BarChart endPoint={'/simple/chartData/objectChartData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    type="Bar"
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    style={arrayChartStyle}
                    accessor={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} />
                <TabX labels={['Setup', 'Chart Data', 'Style Options']} Children={[KeyLessObjSetup, KeyLessObjApi, KeyLessObjStyle]} />
            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleBarCharts;