import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<MultiLineChart
    endPoint={'/simple/multiLineChartData/arrayData.json'}
    style={MultiLineArrayChartStyles}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'month', xLabel: 'month', yKey: ['value', 'min'], yLabel: ["Value", "Minimum"], sourceType: "Array" }}
    />
`;

const KeyValueComponent = `<LineChart
    endPoint={'/simple/chartData/keyValueData.json'}
    style={lineArrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'month', yKey: 'value', yLabel: "Data Set", sourceType: "KeyValue" }}
    />
`;

const KeyedObjectComponent = ` <MultiLineChart
    endPoint={'/simple/multiLineChartData/keyedObjectData.json'}
    style={MultiLineArrayChartStyles}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ yKey: ['value', 'min'], yLabel: ["Value", "Minimum"], sourceType: "Object" }}
/>
`;

const KeylessObjectComponent = `<MultiLineChart
    endPoint={'/simple/multiLineChartData/objectChartData.json'}
    chartOptions={chartOptions}
    style={MultiLineArrayChartStyles}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'month', xLabel: 'month', yKey: ['value', 'min'], yLabel: ["Value", "Minimum"], sourceType: "Object" }} />
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