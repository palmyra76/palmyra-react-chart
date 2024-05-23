const Component = `<SimpleChart
    type="Line"
    endPoint={'/simple/linechartData/keyValueData.json'}
    styleOptions={lineChart}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessorOptions={{ xKey: 'name', yKey: 'count', yLabel: "Data Set", sourceType: "KeyValue" }}
/>
`;
const apiResponse = `{
    "result": {
        "January": 10,
        "February": 6,
        "March": 5,
        "April": 9
    }
}
`

const styles = `const lineChart: StyleOptions = [{
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)'
    }]
}]
`
import CodeHighlighter from '../../../components/syntextHighlighter/CodeHighlighter';

const Setup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={Component} showLineNumbers />
        </div>
    )
}

const Api = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={apiResponse} showLineNumbers />
        </div>
    )
}

const StyleOptions = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={styles} showLineNumbers />
        </div>
    )
}

export { Setup, Api, StyleOptions };
