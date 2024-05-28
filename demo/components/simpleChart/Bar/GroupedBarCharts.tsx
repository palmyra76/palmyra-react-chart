import { PalmyraStoreFactory } from "palmyra-wire";
import { groupedArrayStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import { GroupedBarChart } from "../../../../src/palmyra/react/chart/GroupedBarChart";

const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: "Bar Chart"
        },
        legend: {
            position: 'bottom'
        },
        datalabels: { // datalabels style
            anchor: 'end',
            align: 'end',
            offset: -4
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                display: false
            }
        }
    },
    barThickness: 40
};

const GroupedBarCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<>
        <div>Grouped Bar Chart</div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <GroupedBarChart
                    endPoint={'/simple/chartData/groupChartData/GroupArrayChartData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={groupedArrayStyle}
                    plugins={[ChartDataLabels]}
                        chartOptions={chartOptions}
                    accessor={{
                        xKey: 'location',
                        group: 'month',
                        yKey: 'value',
                        yLabel: 'Month',
                        sourceType: "Array"
                    }} />

                {/* <SimpleChart endPoint={'/simple/chartData/groupChartData/GroupKeyObjectChartData.json'}
                    type="GroupedBar" styleOptions={groupedArrayStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessorOptions={{
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Object"
                    }} /> */}

                <GroupedBarChart
                    endPoint={'/simple/chartData/groupChartData/GroupObjectChartData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={groupedArrayStyle}
                    plugins={[ChartDataLabels]}
                    chartOptions={chartOptions}
                    accessor={{
                        xKey: 'location',
                        group: 'month',
                        yKey: 'value',
                        yLabel: 'Month',
                        sourceType: "Object"
                    }} />
            </div>
        </Dashboard>
    </>
    )
}

export default GroupedBarCharts;