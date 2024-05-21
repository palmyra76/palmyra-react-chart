import { PalmyraStoreFactory } from "palmyra-wire";
import { groupedBarChart } from "../chartColors";
import { Dashboard, SimpleChart } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

const GroupedBarChart = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<>
        <div>Grouped Bar Chart</div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <SimpleChart endPoint={'/simple/barchartData/GroupBarChartData.json'}
                    type="GroupedBar" styleOptions={groupedBarChart}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessorOptions={{
                        xKey: 'constituency',
                        group: 'criticality',
                        yKey: 'boothCount',
                        yLabel: 'Criticality',
                        sourceType: "Array"
                    }} />
            </div>
        </Dashboard>
    </>
    )
}

export default GroupedBarChart;