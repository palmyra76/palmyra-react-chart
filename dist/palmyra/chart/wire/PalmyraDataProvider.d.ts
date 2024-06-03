import { ChartStore, IEndPoint, IEndPointOptions } from 'palmyra-wire';
import { AsyncDataProvider, dataConsumer } from './Types';

declare class PalmyraDataProvider implements AsyncDataProvider {
    store: ChartStore<any>;
    endPoint: IEndPoint;
    endPointOptions: IEndPointOptions;
    filter: any;
    sortOrder: any;
    consumer: dataConsumer;
    constructor(chartStore: ChartStore<any>, endPoint: IEndPoint, endPointOptions?: IEndPointOptions, filter?: any, sortOrder?: any);
    setFilter(filter: any, fetchNow?: boolean): void;
    setSortOrder(sortOrder: any, fetchNow?: boolean): void;
    fetch(): void;
    setData(d: any): void;
    subscribe(dataConsumer: any): void;
}
export { PalmyraDataProvider };
