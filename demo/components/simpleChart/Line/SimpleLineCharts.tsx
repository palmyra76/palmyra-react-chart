import { PalmyraStoreFactory } from "palmyra-wire";
import { lineChart, lineChartStyle } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-adapter-date-fns';
import TabX from "../../tab/TabX";
import { Api as ArrayApi, Setup as ArraySetup, StyleOptions as ArrayStyle } from "../../../pages/lineCharts/config/LineArrayConfig";
import { Api as KeyValueApi, Setup as KeyValueSetup, StyleOptions as KeyValueStyle } from "../../../pages/lineCharts/config/LineKeyValueConfig";
import { Api as KeyObjApi, Setup as KeyObjSetup, StyleOptions as KeyObjStyle } from "../../../pages/lineCharts/config/LineKeyedObjConfig";
import { Api as KeyLessObjApi, Setup as KeyLessObjSetup, StyleOptions as KeyLessObjStyle } from "../../../pages/lineCharts/config/LineKeyLessObjConfig";
import { LineChart } from "../../../../src/palmyra/react/chart/LineChart";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    tension: 0.2,
    plugins: {
        title: {
            display: true,
            text: 'Line Chart'
        },
        legend: {
            position: 'top'
        },
        datalabels: { // datalabels style
            anchor: 'end',
            align: 'end',
            offset: -4
        }
    },
    scales: {
        x: {
            // type: 'time',
            // time: {
            //     unit: 'day',
            //     tooltipFormat: 'dd/MM/yyyy HH:mm:ss',
            //     displayFormats: {
            //         // 'default': 'MM/DD/YYYY',
            //         hyphen: 'YYYY-MM-DD',
            //         // month: 'MMM D, YYYY',
            //         // iso: 'YYYY-MM-DDTHH:mm:ss',
            //     },
            // },
            title: {
                display: true,
                text: 'Month'
            },
            // suggestedMin: 1,
            // suggestedMax: 4
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Count'
            },

            // suggestedMin: 1,
            // suggestedMax: 4
        }
    }
};

const SimpleLineCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    // function toDate(epoch: any) {
    //     const date = new Date(parseInt(epoch));
    //     const formatDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    //     return formatDate.toLocaleString();
    // }

    // function toEpoch(date: any) {
    //     const epoch = new Date(date).getTime();
    //     return epoch;
    // }


    // console.log("date", toDate(1709302790000))
    // console.log("epoch", toEpoch("2024-03-01T19:49:50"))
    // console.log("epoch", toEpoch("Mar 1, 2024 19:49:50"))


    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Line Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                {/* <SimpleChart type="Line"
                    endPoint={'/simple/linechartData/arrayData.json'}
                    styleOptions={lineChart} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: 'count', yLabel: "Data Set", sourceType: "Array" }} /> */}

                <LineChart
                    endPoint={'/simple/linechartData/arrayData.json'}
                    style={lineChartStyle} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'name', xLabel: 'Name', yKey: 'count', yLabel: "Data Set", sourceType: "Array" }} />
                <TabX labels={['Setup', 'API Response', 'Style Options']} Children={[ArraySetup, ArrayApi, ArrayStyle]} />

                <div className="h2-container"><span className="h2">Key Value</span></div>
                <SimpleChart type="Line" endPoint={'/simple/linechartData/keyValueData.json'}
                    styleOptions={lineChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', yKey: 'count', yLabel: "Count", sourceType: "KeyValue" }} />
                <TabX labels={['Setup', 'API Response', 'Style Options']} Children={[KeyValueSetup, KeyValueApi, KeyValueStyle]} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <SimpleChart type="Line" endPoint={'/simple/linechartData/keyedObjectData.json'}
                    styleOptions={lineChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ yKey: 'count', sourceType: "Object" }} />
                <TabX labels={['Setup', 'API Response', 'Style Options']} Children={[KeyObjSetup, KeyObjApi, KeyObjStyle]} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <SimpleChart type="Line" endPoint={'/simple/linechartData/objectChartData.json'}
                    chartOptions={chartOptions}
                    styleOptions={lineChart}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} />
                <TabX labels={['Setup', 'API Response', 'Style Options']} Children={[KeyLessObjSetup, KeyLessObjApi, KeyLessObjStyle]} />
            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleLineCharts;