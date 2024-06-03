import { ChartDataConverter } from '../../Types';
import { AccessorOptions } from '../../../../react';

declare const KeyValueScaleConverter: (options: AccessorOptions) => ChartDataConverter<number>;
export { KeyValueScaleConverter };
