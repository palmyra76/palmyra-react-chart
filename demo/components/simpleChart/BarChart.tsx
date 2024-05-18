import SimpleChart from "../../../src/palmyra/chart/chartjs/rtu/SimpleChart";
import { PalmyraStoreFactory } from "palmyra-wire";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { barChart, barArrayChart } from "./chartColors";

const BarChart = () => {

    const storeFactory = new PalmyraStoreFactory({ baseUrl: 'demo/testdata' })

    return (
        <>
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                <div style={{ height: '100px', width: '600px' }}>Vertical Bar Chart
                    <SimpleChart type="Bar"
                        storeFactory={storeFactory}
                        chartOptions={{
                            maintainAspectRatio: false,
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                    labels: {
                                        usePointStyle: true,
                                        boxHeight: '5'
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
                        storeOptions={{ endPoint: '/simple/barChartData.json' }}
                        styleOptions={barChart}
                        transformOptions={{
                            yKey: 'count',
                            yLabel: 'Criticality'
                        }}
                        hideTitle={true}
                    />
                </div>

                <div style={{ height: '100px', width: '700px' }}>Horizontal Bar Chart
                    <SimpleChart type="Bar"
                        storeFactory={storeFactory}
                        chartOptions={{
                            maintainAspectRatio: false,
                            responsive: true,
                            indexAxis: 'y',
                            plugins: {
                                legend: {
                                    position: 'top',
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
                        storeOptions={{ endPoint: '/simple/barChartData.json' }}
                        styleOptions={barArrayChart}
                        transformOptions={{
                            yKey: 'count',
                            yLabel: 'Criticality'
                        }}
                        hideTitle={true}
                    />
                </div>
                <div style={{ height: '100px', width: '800px' }}>Grouped Bar Chart
                    <SimpleChart<'GroupedBar'> type="GroupedBar"
                        storeFactory={storeFactory}
                        chartOptions={{
                            maintainAspectRatio: false,
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                    // labels: {
                                    //     usePointStyle: true,
                                    //     boxHeight: '5'
                                    // }
                                },
                                datalabels: {
                                    anchor: 'end',
                                    align: 'end',
                                    offset: -4,
                                    // formatter: function (value, _context) {
                                    //     return value.y;
                                    // }
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
                        storeOptions={{ endPoint: '/simple/HBarChartData.json' }}
                        styleOptions={barChart}
                        transformOptions={{
                            xKey: 'constituency',
                            group: 'criticality',
                            yKey: 'boothCount',
                            yLabel: 'Criticality'
                        }}
                        // filter={geoFilter}
                        hideTitle={true}
                    />
                </div>

                {/* <div style={{ height: '100px', width: '700px' }}>Stacked Bar Chart
                    <SimpleChart type="StackedBar"
                        storeFactory={storeFactory}
                        chartOptions={{
                            maintainAspectRatio: false,
                            responsive: true,
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
                                    },
                                    stacked: true,
                                },
                                y: {
                                    grid: {
                                        display: false
                                    },
                                    stacked: true,
                                }
                            }
                        }}
                        plugins={[ChartDataLabels]}
                        storeOptions={{ endPoint: '/simple/HBarChartData.json' }}
                        styleOptions={barChart}
                        transformOptions={{
                            xKey: 'constituency',
                            group: 'criticality',
                            yKey: 'boothCount',
                            yLabel: 'Criticality'
                        }}
                    />
                </div> */}
            </div>
        </>
    )

}

export default BarChart;