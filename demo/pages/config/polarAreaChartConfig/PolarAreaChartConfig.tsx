import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<PolarAreaChart
    onPointClick={(d) => console.log(d)}
    endPoint={'/simple/chartData/arrayData.json'}
    style={arrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{
        xKey: 'month', yKey: 'value', yLabel: 'Data Set', sourceType: "Array",
        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
    }}
/>
`;

const KeyValueComponent = `<PolarAreaChart
    endPoint={'/simple/chartData/keyValueData.json'}
    onPointClick={(d) => console.log(d)}
    style={namedChartStyle}
    chartOptions={chartOptions}
    accessor={{ xKey: 'month', yKey: 'value', xLabel: 'month', yLabel: 'value', sourceType: "KeyValue" }} />
`;

const KeyedObjectComponent = `<PolarAreaChart
    endPoint={'/simple/chartData/keyedObjectData.json'}
    onPointClick={(d) => console.log(d)}
    style={namedChartStyle}
    chartOptions={chartOptions}
    accessor={{ yKey: 'value', sourceType: "Object" }}
/>
`;

const KeylessObjectComponent = `<PolarAreaChart
    endPoint={'/simple/chartData/objectChartData.json'}
    onPointClick={(d) => console.log(d)}
    chartOptions={chartOptions}
    style={arrayChartStyle}
    accessor={{ xKey: 'month', yKey: 'value', sourceType: "Object" }}
/>
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