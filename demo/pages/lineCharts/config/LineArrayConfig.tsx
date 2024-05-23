const Component = `<SimpleChart
    type="Line"
    endPoint={'/simple/linechartData/arrayData.json'}
    styleOptions={lineChart}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessorOptions={{ xKey: 'name', xLabel: 'Name', yKey: 'count', yLabel: "Data Set", sourceType: "Array" }}
/> 
`;
const apiResponse = `{
    "result": [
        {
            "count": 5,
            "name": "January"
        },
        {
            "count": 10,
            "name": "February"
        },
        {
            "count": 8,
            "name": "March"
        },
        {
            "count": 4,
            "name": "April"
        }
    ]
}`

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
