import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<MultiLineChart
    endPoint={'/simple/multiLineChartData/arrayData.json'}
    onPointClick={(d) => console.log(d)}
    style={MultiLineArrayChartStyles}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'month', xLabel: 'month', yKey: ['value', 'min'], yLabel: ["Value", "Minimum"], sourceType: "Array" }}
    />
`;

const KeyValueComponent = `<LineChart
    endPoint={'/simple/chartData/keyValueData.json'}
    onPointClick={(d) => console.log(d)}
    style={lineArrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'month', yKey: 'value', yLabel: "Data Set", sourceType: "KeyValue" }}
    />
`;

const KeyedObjectComponent = ` <MultiLineChart
    endPoint={'/simple/multiLineChartData/keyedObjectData.json'}
    onPointClick={(d) => console.log(d)}
    style={MultiLineArrayChartStyles}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ yKey: ['value', 'min'], yLabel: ["Value", "Minimum"], sourceType: "Object" }}
/>
`;

const KeylessObjectComponent = `<MultiLineChart
    endPoint={'/simple/multiLineChartData/objectChartData.json'}
    onPointClick={(d) => console.log(d)}
    chartOptions={chartOptions}
    style={MultiLineArrayChartStyles}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'month', xLabel: 'month', yKey: ['value', 'min'], yLabel: ["Value", "Minimum"], sourceType: "Object" }} />
`;

const ArrayComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={ArrayComponent} />
        </div>
    )
}

const KeyValueComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeyValueComponent} />
        </div>
    )
}

const KeyedObjectComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeyedObjectComponent} />
        </div>
    )
}

const KeylessObjectComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeylessObjectComponent} />
        </div>
    )
}


export { ArrayComponentSetup, KeyValueComponentSetup, KeyedObjectComponentSetup, KeylessObjectComponentSetup }