import { PalmyraStoreFactory } from "palmyra-wire";
import { groupedArrayStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
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
                <StackedBarChart endPoint={'/simple/chartData/groupChartData/GroupArrayChartData.json'}
                    style={groupedArrayStyle}
                    onPointClick={(d) => ChartToastify(d)}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessor={{
                        xKey: 'location',
                        group: 'month',
                        yKey: 'value',
                        yLabel: 'Month',
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

                <StackedBarChart endPoint={'/simple/chartData/groupChartData/GroupObjectChartData.json'}
                    style={groupedArrayStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
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

export default StackedBarCharts;