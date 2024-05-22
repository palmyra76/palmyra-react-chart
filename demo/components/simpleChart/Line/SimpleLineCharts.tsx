import { PalmyraStoreFactory } from "palmyra-wire";
import { lineChart } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-adapter-date-fns';

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
        }
    },
    scales: {
        x: {
            type: 'time',
            time: {
                unit: 'day',
                tooltipFormat: 'dd/MM/yyyy HH:mm:ss',
                displayFormats: {
                    // 'default': 'MM/DD/YYYY',
                    hyphen: 'YYYY-MM-DD',
                    // month: 'MMM D, YYYY',
                    // iso: 'YYYY-MM-DDTHH:mm:ss',
                },
            },
            title: {
                display: true,
                text: 'Date'
            },
            // suggestedMin: 1,
            // suggestedMax: 4
        },
        y: {
            title: {
                display: true,
                text: 'count'
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


    return (<>
        <Dashboard storeFactory={storeFactory}>
            <div>
                Array
                <SimpleChart type="Line"
                    endPoint={'/simple/linechartData/arrayData.json'}
                    styleOptions={lineChart} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: 'count', yLabel: "Count", sourceType: "Array" }} />

                KeyValue
                <SimpleChart type="Line" endPoint={'/simple/linechartData/keyValueData.json'}
                    styleOptions={lineChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', yKey: 'count', yLabel: "Count", sourceType: "KeyValue" }} />

                Keyed Object
                <SimpleChart type="Line" endPoint={'/simple/linechartData/keyedObjectData.json'}
                    styleOptions={lineChart}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ yKey: 'count', sourceType: "Object" }} />

                KeylessObject
                <SimpleChart type="Line" endPoint={'/simple/linechartData/objectChartData.json'}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} />
            </div>
        </Dashboard>
    </>
    )
}

export default SimpleLineCharts;