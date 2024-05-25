import { PalmyraStoreFactory } from "palmyra-wire";
import { groupedArrayStyle } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { StackedBarChart } from "../../../../src/palmyra/react/chart/StackedBarChart";
import ChartToastify from "../ChartToastify";

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
            stacked: true,
            grid: {
                display: false
            }
        },
        y: {
            stacked: true,
            grid: {
                display: false
            }
        }
    },
    barThickness: 100
};

const StackedBarCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<>
        <div>Stacked Bar Chart</div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                {/* <SimpleChart endPoint={'/simple/chartData/groupChartData/GroupChartData.json'}
                    type="StackedBar" styleOptions={groupedChartStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessorOptions={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Array"
                    }} /> */}
                <StackedBarChart endPoint={'/simple/chartData/groupChartData/GroupArrayChartData.json'}
                    type="StackedBar"
                    style={groupedArrayStyle}
                    onPointClick={(d) => ChartToastify(d)}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessor={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Array"
                    }} />
                {/* <SimpleChart endPoint={'/simple/chartData/groupChartData/GroupKeyObjectChartData.json'}
                    type="StackedBar" styleOptions={groupedChartStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessorOptions={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Object"
                    }} />*/}

                <SimpleChart endPoint={'/simple/chartData/groupChartData/GroupObjectChartData.json'}
                    type="StackedBar" styleOptions={groupedArrayStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessorOptions={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Object"
                    }} />
            </div>
        </Dashboard>
    </>
    )
}

export default StackedBarCharts;