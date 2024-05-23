import { PalmyraStoreFactory } from "palmyra-wire";
import { groupedChartStyle } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { StackedBarChart } from "../../../../src/palmyra/react/chart/StackedBarChart";

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
    }
};

const StackedBarCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<>
        <div>Stacked Bar Chart</div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                {/* <SimpleChart endPoint={'/simple/barchartData/GroupBarChartData.json'}
                    type="StackedBar" styleOptions={groupedChartStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessorOptions={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Array"
                    }} /> */}
                <StackedBarChart endPoint={'/simple/barchartData/GroupBarChartData.json'}
                    type="StackedBar" style={groupedChartStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessor={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Array"
                    }} />
                <SimpleChart endPoint={'/simple/barchartData/GroupBarKeyObjectChartData.json'}
                    type="StackedBar" styleOptions={groupedChartStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessorOptions={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Object"
                    }} />

                <SimpleChart endPoint={'/simple/barchartData/GroupedBarObjectChartData.json'}
                    type="StackedBar" styleOptions={groupedChartStyle}
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