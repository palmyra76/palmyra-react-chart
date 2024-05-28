import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<ScatterChart
    onPointClick={(d) => console.log(d)}
    endPoint={'/simple/multiLineChartData/arrayData.json'}
    style={scatterChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'value', yKey: 'min', yLabel: 'Data Set', sourceType: "Array" }}
/>
`;


const ArrayComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={ArrayComponent} showLineNumbers />
        </div>
    )
}


export { ArrayComponentSetup }