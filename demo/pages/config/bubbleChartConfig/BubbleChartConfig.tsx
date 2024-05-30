import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<BubbleChart
    endPoint={'/simple/chartData/bubbleChartData/arrayData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={arrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{
        xKey: 'average', yKey: 'value', xLabel: 'month',
        rKey: 'top', yLabel: 'Data Set', sourceType: "Array"
    }}
/>
`;

const ArrayComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={ArrayComponent} />
        </div>
    )
}


export { ArrayComponentSetup }