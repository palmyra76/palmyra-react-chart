import { RawDataType } from "../../Types";

/**
 * The accessor will be used for data transformation to chartjs dataset
 */
type accessor<T> = (d: any) => T;

type resultType = string | number | Date;
type keyedAccessor<T> = { ref?: string, accessor: accessor<T> };
type attributeAccessor = string | keyedAccessor<resultType> | accessor<resultType>;

interface ConverterOptions {
    xKey?: attributeAccessor,
    yKey?: attributeAccessor[] | attributeAccessor,
    rKey?: attributeAccessor,
    group?: attributeAccessor,
    xLabel?: string,
    yLabel?: string[] | string,
    sourceType?: RawDataType
}

export type { accessor, resultType, attributeAccessor, keyedAccessor, ConverterOptions }