import { ChartDataConverter } from '../../Types';
import { AccessorOptions } from '../../../../react';

declare const ObjectScaleConverter: (options: AccessorOptions) => ChartDataConverter<number>;
export { ObjectScaleConverter };
