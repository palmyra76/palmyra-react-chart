import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = ` <StackedBarChart
    endPoint={'/simple/chartData/groupChartData/GroupArrayChartData.json'}
    style={groupedArrayStyle}
    onPointClick={(d) => console.log(d)}
    plugins={[ChartDataLabels]}
    chartOptions={chartOptions}
    accessor={{
        xKey: 'location',
        group: 'month',
        yKey: 'value',
        yLabel: 'Month',
        sourceType: "Array"
    }}
/>
`;


const KeylessObjectComponent = `<StackedBarChart
    endPoint={'/simple/chartData/groupChartData/GroupObjectChartData.json'}
    style={groupedArrayStyle}
    onPointClick={(d) => console.log(d)}
    chartOptions={chartOptions}
    accessor={{
        xKey: 'location',
        group: 'month',
        yKey: 'value',
        yLabel: 'Month',
        sourceType: "Object"
    }}
/>
`;

const ArrayComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={ArrayComponent} showLineNumbers />
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


export { ArrayComponentSetup, KeylessObjectComponentSetup }