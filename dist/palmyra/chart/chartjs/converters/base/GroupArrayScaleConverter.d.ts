import { ChartDataConverter } from '../../..';
import { AccessorOptions } from '../../../../react';

declare const GroupArrayScaleConverter: (options: AccessorOptions) => ChartDataConverter<any>;
declare const GroupObjectScaleConverter: (options: AccessorOptions) => ChartDataConverter<any>;
export { GroupArrayScaleConverter, GroupObjectScaleConverter };
