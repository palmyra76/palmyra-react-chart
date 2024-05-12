import { MutableRefObject, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Chart, ChartType as ChartJsType, Plugin, registerables, TimeScale } from 'chart.js';

import { ChartType, IPalmyraChartOptions, TypedTransformOptions } from '../../Types';
import { ChartJS, IChartJS } from '../ChartJS';
import { mergeDeep } from '../util';
import { getStyleConverter } from '../StyleConverterFactory';
import { StoreFactory } from 'palmyra-wire';
import { ChartStoreFactoryContext } from '../../ChartLayoutContext';

interface IDynamicChartOptions<T extends ChartType> extends IPalmyraChartOptions<T> {
    filter?: any,
    limit?: number,
    onDataChange?: (d: any) => void,
    plugins?: Plugin<ChartJsType>[],
    chartRef?: MutableRefObject<IDynamicChart<T>>
}

interface IDynamicChart<T extends ChartType> {
    setFilter: (filter: any) => void,
    setTransformOptions: (o: TypedTransformOptions<T>) => void
}

Chart.register(...registerables, TimeScale);

const DynamicChart = <T extends ChartType,>(props: IDynamicChartOptions<T>) => {    
    const currentRef = props.chartRef || useRef<IDynamicChart<T>>();
    const chartRef = useRef<IChartJS>(null);
    const storeFactory: StoreFactory<any> = props.storeFactory || useContext(ChartStoreFactoryContext);
    var storeOptions = props.storeOptions || {};

    var storeRequest: any = {};
    mergeDeep(storeRequest, storeOptions);

    const store = storeFactory.getChartStore(storeRequest, storeOptions.endPoint);

    const [data, setData] = useState(null);
    useImperativeHandle(currentRef, () => {
        return {
            setFilter(filter) {
                store.query({ filter, limit: props.limit })
                    .then((d: any) => {
                        updateData(d)
                    })
                    .catch(() => setData(null));

            },
            setTransformOptions(s) {
                if (null != chartRef?.current) {
                    chartRef.current.setTransformOptions(s);
                    chartRef.current.setData(data);

                }
            }
        }
    }, [chartRef, chartRef.current, data, props.transformOptions])


    function getConverter(props: IDynamicChartOptions<T>) {
        return getStyleConverter(props.type, props.styleOptions, props.transformOptions);
    }

    function updateData(data: any) {
        if (props.onDataChange) {
            try {
                props.onDataChange(data);
            } catch (e) {
                console.error(e);
            }
        }
        setData(data);
    }

    useEffect(() => {
        store.query({ filter: props.filter, limit: props.limit })
            .then(d => updateData(d))
            .catch(() => setData(null));
    }, [props.filter, props.storeOptions.endPoint]);

    function getHeight() {
        return props.height || '350px';
    }

    const transformOptions = props.transformOptions;
    const postProcessor = getConverter(props);

    return (
        <div className="palmyra-chart-container-wrapper">
            {(data) ?
                <ChartJS
                    type={props.type} chartRef={chartRef} data={data}
                    title={props.title} hideTitle={props.hideTitle} onAreaSelect={props.onAreaSelect}
                    onPointClick={props.onPointClick} height={getHeight()} plugins={props.plugins}
                    name={props.name} width={props.width}
                    transformOptions={transformOptions} postProcessors={[postProcessor]}
                    options={props.chartOptions} /> : <div>loading...</div>}
        </div>
    );
};

export default DynamicChart;
export type { IDynamicChart }