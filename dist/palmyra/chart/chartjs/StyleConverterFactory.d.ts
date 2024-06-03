import { ChartType, ITransformOptions } from '../Types';
import { ChartDataConverter, StyleOptions } from '..';

declare const getStyleConverter: (chartType: ChartType, styleOptions: StyleOptions, options: ITransformOptions) => ChartDataConverter<any>;
export { getStyleConverter };
