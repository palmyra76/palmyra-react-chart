import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<LineChart
    endPoint={'/simple/chartData/arrayData.json'}
    onPointClick={(d) => console.log(d)}
    style={lineArrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'name', xLabel: 'Name', yKey: 'count', yLabel: "Data Set", sourceType: "Array" }}
/>
`;

const KeyValueComponent = `<LineChart
    endPoint={'/simple/chartData/keyValueData.json'}
    style={lineArrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'name', yKey: 'count', yLabel: "Data Set", sourceType: "KeyValue" }}
    />
`;

const KeyedObjectComponent = `<LineChart
    endPoint={'/simple/chartData/keyedObjectData.json'}
    style={lineArrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ yKey: 'count', yLabel: 'Data Set', sourceType: "Object" }}
/>
`;

const KeylessObjectComponent = `<LineChart
    endPoint={'/simple/chartData/objectChartData.json'}
    chartOptions={chartOptions}
    style={lineArrayChartStyle}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} 
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