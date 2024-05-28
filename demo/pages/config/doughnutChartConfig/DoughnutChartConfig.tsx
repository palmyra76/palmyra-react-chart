import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<DoughnutChart
    onPointClick={(d) => ChartToastify(d)}
    endPoint={'/simple/chartData/arrayData.json'}
    style={arrayChartStyle}
    plugins={[ChartDataLabels]}
    chartOptions={chartOptions}
    accessor={{
        xKey: 'month', yKey: 'value', yLabel: 'Data Set', sourceType: "Array",
        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
}}
/>
`;

const KeyValueComponent = `<DoughnutChart
    endPoint={'/simple/chartData/keyValueData.json'}
    onPointClick={(d) => ChartToastify(d)}
    style={namedChartStyle}
    chartOptions={chartOptions}
    accessor={{ xKey: 'month', yKey: 'value', xLabel: 'month', yLabel: 'value', sourceType: "KeyValue" }} />
`;

const KeyedObjectComponent = `<DoughnutChart
    endPoint={'/simple/chartData/keyedObjectData.json'}
    onPointClick={(d) => ChartToastify(d)}
    style={namedChartStyle}
    chartOptions={chartOptions}
    accessor={{ yKey: 'value', sourceType: "Object" }} />
`;

const KeylessObjectComponent = `<DoughnutChart
    endPoint={'/simple/chartData/objectChartData.json'}
    chartOptions={chartOptions}
    style={arrayChartStyle}
    accessor={{ xKey: 'month', yKey: 'value', sourceType: "Object" }} />
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