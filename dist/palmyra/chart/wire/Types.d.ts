type dataConsumer = (d: any) => void;
interface AsyncDataProvider {
    fetch: () => void;
    subscribe: (d: dataConsumer) => void;
}
export type { AsyncDataProvider, dataConsumer };
