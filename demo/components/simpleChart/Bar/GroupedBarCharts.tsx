import { PalmyraStoreFactory } from "palmyra-wire";
import { groupedBarChartStyle, groupedChartStyle } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
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
    }
};

const GroupedBarCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<>
        <div>Grouped Bar Chart</div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                {/* <SimpleChart 
                    endPoint={'/simple/barchartData/GroupBarChartData.json'}
                    type="GroupedBar" styleOptions={groupedChartStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessorOptions={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Array"
                    }} /> */}
                <GroupedBarChart
                    endPoint={'/simple/barchartData/GroupBarChartData.json'}
                    type="GroupedBar" style={groupedBarChartStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessor={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Array"
                    }} />

                <SimpleChart endPoint={'/simple/barchartData/GroupBarKeyObjectChartData.json'}
                    type="GroupedBar" styleOptions={groupedChartStyle}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessorOptions={{
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Object"
                    }} />

                <SimpleChart endPoint={'/simple/barchartData/GroupedBarObjectChartData.json'}
                    type="GroupedBar" styleOptions={groupedChartStyle}
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

export default GroupedBarCharts;