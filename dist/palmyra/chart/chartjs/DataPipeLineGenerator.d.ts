import { IAbstractChartOptions } from '../../react/Types';

declare const generateDataPipeLine: (props: IAbstractChartOptions<any>) => (d: any) => any;
export { generateDataPipeLine };
