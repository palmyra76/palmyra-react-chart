import { IEndPointOptions, QueryRequest } from "palmyra-wire";
import { useRef } from "react";
import { RemoteQueryOptions } from "../Types";

interface Callback {
    onData: (d: any) => void;
    onError?: () => void;
}

const useChartQuery = (props: RemoteQueryOptions, callback: Callback) => {
    const ev = useRef<IEndPointOptions>(props.endPointVars || {});
    const filterRef = useRef<any>(props.filter || {});

    const defaultFilter = {};
    const store = props.store;

    const getQueryRequest = (): QueryRequest => {
        const endPointVars = ev.current;
        const filter = filterRef.current;
        const params: QueryRequest = {
            endPointVars, filter: { ...filter, ...defaultFilter }
        };

        return params;
    }

    const setResult = (result: any) => {
        callback.onData(result);
    }

    const setEmptyData = () => {
        callback.onError();
    }

    const setNoData = () => {
        setResult(undefined);
    }

    const fetch = () => {
        const params: QueryRequest = getQueryRequest();

        if (store) {
            try {
                store.query(params).then((d: any) => {
                    setResult(d);
                }).catch((e) => {
                    var r = e.response ? e.response : e;
                    console.error("error while fetching", r);
                    setNoData();
                });
            } catch (e) {
                console.error(e);
                setEmptyData();
            }
        } else {
            console.error("Store is not provided for the Grid");
            setEmptyData();
        }
    }

    const setEndPointVars = (options: IEndPointOptions, deferFetch: boolean = false) => {
        ev.current = options;
        if (!deferFetch) {
            fetch();
        }
    }

    const setFilter = (filter: any, deferFetch: boolean = false) => {
        filterRef.current = filter;
        if (!deferFetch) {
            fetch();
        }
    }

    return { fetch, setFilter, setEndPointVars }
}

export { useChartQuery }
export type { AsyncRemoteQueryOptions }