import { ChartStore, IEndPoint, IEndPointOptions } from "palmyra-wire";
import { AsyncDataProvider, dataConsumer } from "../chartjs/dashboard";

class PalmyraDataProvider implements AsyncDataProvider {
    store: ChartStore<any>
    endPoint: IEndPoint
    endPointOptions: IEndPointOptions
    filter: any = {};
    sortOrder: any = {};
    consumer: dataConsumer;

    constructor(chartStore: ChartStore<any>, endPoint: IEndPoint, endPointOptions?: IEndPointOptions,
        filter?: any, sortOrder?: any) {
        this.store = chartStore;
        this.endPoint = endPoint;
        this.endPointOptions = endPointOptions;
        this.filter = filter || {};
        this.sortOrder = sortOrder || {};
    }

    setFilter(filter: any, fetchNow: boolean = false): void {
        this.filter = filter;
        if (fetchNow) {
            this.fetch();
        }
    }

    setSortOrder(sortOrder: any, fetchNow: boolean = false): void {
        this.sortOrder = sortOrder;
        if (fetchNow) {
            this.fetch();
        }
    }

    fetch(): void {
        this.store.query({ limit: 1000, total: true, filter: {} })
            .then(d => this.setData(d))
            .catch(() => this.setData(null));
    }

    setData(d: any): void {
        if (this.consumer)
            this.consumer(d);
    }

    subscribe(dataConsumer: any): void {
        this.consumer = dataConsumer;
    };
}

export { PalmyraDataProvider }