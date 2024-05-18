import { QueryRequest } from "palmyra-wire";
import { useState } from "react";
import { RemoteQueryOptions } from "../chartjs/dashboard";

const useChartQuery = (props: RemoteQueryOptions) => {
    const [endPointVars, setEndPointVars] = useState(props.endPointVars);

    const [filter, setFilter] = useState(props.filter || {});
    const [data, setData] = useState(null);

    const defaultFilter = {};
    const store = props.store;

    const getQueryRequest = (): QueryRequest => {

        const params: QueryRequest = {
            endPointVars, filter: { ...filter, ...defaultFilter }
        };

        return params;
    }

    const setResult = (result: any) => {
        setData((old: any) => {
            console.log(result)
            // setTimeout(() => {
            //     if (props.onDataChange) {
            //         props.onDataChange(result, old);
            //     }
            // }, 300)
            return result;
        })
    }

    const setEmptyData = () => {
        setResult([]);
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

    return { fetch, setFilter, data, setEndPointVars }
}

export { useChartQuery }