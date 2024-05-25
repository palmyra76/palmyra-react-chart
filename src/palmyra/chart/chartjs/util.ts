import { AccessorOptions } from "../../react";
import { attributeAccessor, keyedAccessor } from "./converters";


interface keys {
    xKey: keyedAccessor<any>,
    yKeys: keyedAccessor<any>[]
}

function getKeys(options: AccessorOptions): keys {
    const xKey: any = options?.xKey || 'name';
    const yKe = options?.yKey || 'value';

    const yKeys = yKe instanceof Array ? yKe : [yKe];

    return {
        xKey: getAccessor(xKey),
        yKeys: getAccessors(yKeys)
    }
}

function getAccessors(vs: attributeAccessor[]): keyedAccessor<any>[] {
    return vs.map(getAccessor);
}

function getAccessor(v: attributeAccessor): keyedAccessor<any> {
    if (v instanceof Function || typeof v == 'function') {
        return { accessor: v }
    }
    if (v instanceof Object && v.accessor) {
        return v;
    }
    else if (typeof v == 'string') {
        // @ts-ignore
        const key: string = v;
        return {
            ref: key,
            accessor: (r: any) => { return r[key] }
        };
    }
    console.error('Invalid attribute accessor', v);
    throw Error('Invalid Attribute Accessor  ');
}

function getLabels(options: AccessorOptions) {
    const xLabel: any = options?.xLabel || options?.xKey || 'name';
    const yLabs = options?.yLabel || options?.yKey || 'value';

    const yLabels = (yLabs instanceof Array || typeof yLabs == 'object') ? yLabs : [yLabs];

    return {
        xLabel,
        yLabels
    }
}

const getLabel = (yLabels: any, key: string, index: number) => {
    if (yLabels instanceof Array)
        return yLabels[index] || key;
    else
        return yLabels[key] || key;
}

export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

export function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
}

export { getLabel, getLabels, getKeys, getAccessor }