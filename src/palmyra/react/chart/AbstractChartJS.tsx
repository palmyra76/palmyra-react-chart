
import { Chart as ChartRef, ChartType as ChartJSType, ChartOptions, registerables, TimeScale } from 'chart.js';
import { MutableRefObject, useImperativeHandle, useMemo, useRef } from 'react';
import { Chart } from 'react-chartjs-2';

// import {
//     Chart as ChartJ,
//     CategoryScale,
//     LinearScale,
//     RadialLinearScale,
//     BarElement,
//     PointElement,
//     ArcElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

import { ChartType } from '../../chart';
import { IChartJS, IChartJSOptions } from './Types';


ChartRef.register(...registerables, TimeScale);

const ChartJSTypeRegistry: Partial<Record<ChartType, ChartJSType>> = {
    Line: 'line',
    MultiLine: 'line',
    AreaChart: 'line',
    Bar: 'bar',
    GroupedBar: 'bar',
    StackedBar: 'bar',
    Bubble: 'bubble',
    Doughnut: 'doughnut',
    Pie: 'pie',
    PolarArea: 'polarArea',
    Radar: 'radar',
    Scatter: 'scatter',
    GroupedScatter: 'scatter'
}

const defaultOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
};

// ChartJ.register(
//     CategoryScale,
//     LinearScale,
//     RadialLinearScale,
//     BarElement,
//     PointElement,
//     ArcElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     TimeScale
// );

function AbstractChartJS<T,>(p: IChartJSOptions) {
    const defaultPlugins = [];

    const options = p.options || { ...defaultOptions };
    const plugins = p.plugins || defaultPlugins;
    const chartJsRef = useRef<ChartRef>(null);

    const datasets = p?.chartData?.datasets || [];
    const labels = p?.chartData?.labels || [];

    const data = {
        labels: labels,
        datasets: datasets
    }

    const currentRef: MutableRefObject<IChartJS> = p.chartRef || useRef<IChartJS>(null);

    useImperativeHandle(currentRef, () => {
        return {
            clear: () => {
                if (!chartJsRef.current)
                    return;
                chartJsRef.current.clear();
            },
            resize: (width?: number, height?: number) => {
                if (!chartJsRef.current)
                    return;
                chartJsRef.current.resize(width, height);
            },
            reset: () => {
                if (!chartJsRef.current)
                    return;
                chartJsRef.current.reset();
            },
            setData: (d: any) => {
                if (!chartJsRef.current)
                    return;
                const chart = chartJsRef.current;
                if (d) {
                    chart.data = d;
                    chart.update();
                }
            }
        }
    }, [chartJsRef]);

    function getProps() {
        return p;
    }

    function getHeight() {
        return '350px';
    }

    const chart = useMemo(() => {
        const props = getProps();
        // if (props.onAreaSelect) {
        //     useAreaSelectListener(props.type, options, plugins, props.onAreaSelect);
        // }
        // const { onClick } = useListener("Bar", props, chartRef);
        return <Chart type={ChartJSTypeRegistry[props.type]} ref={chartJsRef}
            options={options} plugins={plugins}
            data={data} height={getHeight()} />
    }, []);

    return (
        <div className="palmyra-chart-container-wrapper">
            {chart}
        </div>
    );
};

export { AbstractChartJS }