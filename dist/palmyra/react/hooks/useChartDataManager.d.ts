import { IEndPoint, IEndPointOptions } from 'palmyra-wire';
import { DataTransformer, storeBacked } from '../../chart/Types';

interface IDataManagerInput extends storeBacked {
    filter?: any;
    storeOptions: {
        endPoint: IEndPoint;
        endPointOptions?: IEndPointOptions;
        hasLayout?: boolean;
    };
    onData: (data: any) => void;
    onError?: (error?: any) => void;
    transformData?: DataTransformer<any>;
}
declare const useChartDataManager: (props: IDataManagerInput) => {
    fetchData: (filter?: any) => void;
    transform: (d: any) => any;
};
export { useChartDataManager };
