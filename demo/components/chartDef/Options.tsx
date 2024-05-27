
const style = () => {
    return (
        <ul>
            <li>props: DataSetProperties
                <ul>
                    <li>borderWidth: number</li>
                    <li>radius: number</li>
                    <li>hoverRadius: number</li>
                    <li>hidden: boolean ... <a href="https://www.chartjs.org/docs/latest/charts/line.html#dataset-properties">more</a></li>
                </ul>
            </li>
            <li> style: {<ul>
                <li>backgroundColor: string</li>
                <li>borderColor: string</li>
                <li>hoverBackgroundColor: string</li>
                <li>hoverBorderColor: string</li></ul>}</li>
        </ul>
    )
}

const accessor = () => {
    return (
        <ul>
            <li>xKey: attributeAccessor</li>
            <li>yKey: attributeAccessor</li>
            <li>xLabel: String</li>
            <li>yLabel: String</li>
            <li>xKeyLabelMap: Record&lt;string, string&gt;</li>
            <li>sourceType: 'Array' | 'Object' | 'KeyValue' | 'noop'</li>
        </ul>
    )
}

const accessorDes = () => {
    return (
        <ul>
            <li> x Axis for chart</li>
            <li> y Axis for chart</li>
            <li> Name of the x Axis</li>
            <li> Name of the y Axis</li>
            <li> Label Name Changing</li>
            <li> Type of chart data</li>
        </ul>
    )
}


export { style, accessor, accessorDes }