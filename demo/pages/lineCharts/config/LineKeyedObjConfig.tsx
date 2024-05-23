const Component = `<SimpleChart
    type="Line"
    endPoint={'/simple/linechartData/keyedObjectData.json'}
    styleOptions={lineChart}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessorOptions={{ yKey: 'count', sourceType: "Object" }} 
/>
`;
const apiResponse = `{
    "result": {
        "January": {
            "count": 7
        },
        "February": {
            "count": 5
        },
        "March": {
            "count": 8
        },
        "April": {
            "count": 4
        }
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
