import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<PieChart
    onPointClick={(d) => ChartToastify(d)}
    endPoint={'/simple/chartData/arrayData.json'}
    style={arrayChartStyle} chartOptions={chartOptions} plugins={[ChartDataLabels]}
    accessor={{
        xKey: 'name', yKey: 'count', yLabel: 'Data Set', sourceType: "Array",
        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
    }}
/>
`;

const KeyValueComponent = `<PieChart
    endPoint={'/simple/chartData/keyValueData.json'}
    onPointClick={(d) => ChartToastify(d)}
    style={namedChartStyle}
    chartOptions={chartOptions}
    accessor={{ xKey: 'Name', yKey: 'Count', xLabel: 'Name', yLabel: 'Count', sourceType: "KeyValue" }}
/>
`;

const KeyedObjectComponent = `<PieChart
    endPoint={'/simple/chartData/keyedObjectData.json'}
    onPointClick={(d) => ChartToastify(d)}
    style={namedChartStyle}
    chartOptions={chartOptions}
    accessor={{ yKey: 'count', sourceType: "Object" }}
    />
`;

const KeylessObjectComponent = `<PieChart
    endPoint={'/simple/chartData/objectChartData.json'}
    onPointClick={(d) => ChartToastify(d)}
    chartOptions={chartOptions}
    style={arrayChartStyle}
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