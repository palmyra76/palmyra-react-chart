import SimpleChart from "../../../src/palmyra/chart/chartjs/rtu/SimpleChart";
import { PalmyraStoreFactory } from "palmyra-wire";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const BarChart = () => {

    const storeFactory = new PalmyraStoreFactory({ baseUrl: 'demo/testdata' })

    return (
        <div>
            <SimpleChart type="Bar"
                storeFactory={storeFactory}
                chartOptions={{
                    maintainAspectRatio: false,
                    responsive: true,
                    indexAxis: 'y', // vertical bar chart
                    plugins: {
                        legend: {
                            display: true
                        },
                        datalabels: {
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
                }}
                plugins={[ChartDataLabels]}
                storeOptions={{ endPoint: '/simple/barChartData.json' }}
                styleOptions={{
                    'CRITICAL': {
                        backgroundColor: 'rgba(220,53,69,0.5)',
                        borderColor: 'rgba(220,53,69,1)',
                        borderWidth: 2,
                        radius: 5
                    }, 'NORMAL': {
                        backgroundColor: 'rgba(40,167,69,0.5)',
                        borderColor: 'rgba(40,167,69,1)',
                        borderWidth: 2
                    }, 'VULNERABLE': {
                        backgroundColor: 'rgba(0,123,255,0.5)',
                        borderColor: 'rgba(0,123,255,0.7)',
                        borderWidth: 2
                    }, 'CRITICAL/VULNERABLE': {
                        backgroundColor: 'rgba(255,193,7,0.5)',
                        borderColor: 'rgba(255,193,7,0.7)',
                        borderWidth: 2
                    },
                }}
                transformOptions={{
                    yKey: 'count',
                    yLabel: 'Criticality'
                }}
                hideTitle={true}
            />
        </div>
    )

}

export default BarChart;