import { AccessorOptions } from '../../react';
import { accessor, attributeAccessor, keyedAccessor } from './converters';

interface keys {
    xKey: keyedAccessor<any>;
    yKeys: keyedAccessor<any>[];
    xLabelAccessor?: accessor<string>;
}
declare function getKeys(options: AccessorOptions): keys;
declare function generateAccessors(options: AccessorOptions): keys;
declare function getAccessor(v: attributeAccessor): keyedAccessor<any>;
declare function getLabels(options: AccessorOptions): {
    xLabel: any;
    yLabels: keyedAccessor<import('./converters').resultType> | attributeAccessor[];
};
declare const getLabel: (yLabels: any, key: string, index: number) => any;
export declare function isObject(item: any): boolean;
export declare function mergeDeep(target: any, ...sources: any[]): any;
export { getLabel, getLabels, getKeys, getAccessor, generateAccessors };
