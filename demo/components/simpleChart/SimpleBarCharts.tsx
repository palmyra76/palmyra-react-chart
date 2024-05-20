import { PalmyraStoreFactory } from "palmyra-wire";
import { barArrayChart, barChart } from "./chartColors";
import { SimpleChart } from "../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const SimpleBarCharts = () => {

    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })


    return (
        <div>Simple Bar Chart
            Array
            <SimpleChart endPoint={'/simple/barchartData/barChartData.json'}
                type="Bar" storeFactory={storeFactory} styleOptions={barChart}
                chartOptions={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        title: {
                            text: "Bar Chart"
                        },
                        legend: {
                            position: 'bottom',
                            // labels: {
                            //     usePointStyle: true,
                            //     boxHeight: 5
                            // }
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
                                display: true
                            }
                        },
                        y: {
                            grid: {
                                display: true
                            }
                        }
                    }
                }}
                plugins={[ChartDataLabels]}
                accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Array" }} />

            Named
            <SimpleChart endPoint={'/simple/barchartData/barNamedChartData.json'}
                type="Bar" storeFactory={storeFactory} styleOptions={barArrayChart}
                chartOptions={{
                    maintainAspectRatio: false,
                    responsive: true,
                    indexAxis: 'y',
                    plugins: {
                        title: {
                            text: "Bar Chart"
                        },
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                boxHeight: 5
                            }
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
                }}
                plugins={[ChartDataLabels]}
                accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "KeyValue" }} />


            Object
            <SimpleChart endPoint={'/simple/barchartData/barObjectChartData.json'}
                type="Bar" storeFactory={storeFactory} styleOptions={barArrayChart}
                chartOptions={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        title: {
                            text: "Bar Chart"
                        },
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                boxHeight: 5
                            }
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
                }}
                plugins={[ChartDataLabels]}
                accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} />

{/* Key Object
            <SimpleChart endPoint={'/simple/barchartData/barObjectChartData.json'}
                type="Bar" storeFactory={storeFactory} styleOptions={barArrayChart}
                plugins={[ChartDataLabels]}
                accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Custom" }} /> */}


            Grouped
            <SimpleChart endPoint={'/simple/barchartData/GroupBarChartData.json'}
                type="GroupedBar" storeFactory={storeFactory} styleOptions={barArrayChart}
                plugins={[ChartDataLabels]}
                accessorOptions={{
                    xKey: 'constituency',
                    group: 'criticality',
                    yKey: 'boothCount',
                    yLabel: 'Criticality',
                    sourceType: "Array"
                }} />
        </div>
    )
}

export default SimpleBarCharts;