import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = ` <BarChart
    endPoint={'/simple/chartData/arrayData.json'}
    onPointClick={(d) => ChartToastify(d)}
    style={arrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{
        xKey: 'name', yKey: 'count', yLabel: 'Data Set', sourceType: "Array",
        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
     }} />
`;

const KeyValueComponent = `<BarChart
    endPoint={'/simple/chartData/keyValueData.json'}
    style={namedChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'Name', yKey: 'Count', xLabel: 'Name', yLabel: 'Data Set', sourceType: "KeyValue" }} 
/>
`;

const KeyedObjectComponent = `<BarChart
    endPoint={'/simple/chartData/keyedObjectData.json'}
    style={namedChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ yKey: 'count', sourceType: "Object" }} />
`;

const KeylessObjectComponent = `<BarChart
    endPoint={'/simple/chartData/objectChartData.json'}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    style={arrayChartStyle}
    accessor={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} />
`;

const ArrayComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={ArrayComponent} showLineNumbers />
        </div>
    )
}

const KeyValueComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeyValueComponent} showLineNumbers />
        </div>
    )
}

const KeyedObjectComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeyedObjectComponent} showLineNumbers />
        </div>
    )
}

const KeylessObjectComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeylessObjectComponent} showLineNumbers />
        </div>
    )
}


export { ArrayComponentSetup, KeyValueComponentSetup, KeyedObjectComponentSetup, KeylessObjectComponentSetup }