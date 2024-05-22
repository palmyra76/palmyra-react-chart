const Component = `<SimpleChart 
     type="Bar"
     endPoint={'/simple/barchartData/barKeyValueData.json'} 
     styleOptions={barChart}
     chartOptions={chartOptions}
     plugins={[ChartDataLabels]}
     accessorOptions={{ xKey: 'Name', yKey: 'Count', xLabel: 'Name', yLabel: 'Count', sourceType: "KeyValue" }} 
/>
`;
const apiResponse = `{
    "result": {
        "CRITICAL": 2,
        "CRITICAL/VULNERABLE": 7,
        "VULNERABLE": 6,
        "NORMAL": 4
    }
}
`

const styles = `const barChart: StyleOptions = [{
    props: {
        borderWidth: 3
    },
    style: {
        'CRITICAL': {
            backgroundColor: 'rgba(220,53,69,0.5)',
            borderColor: 'rgba(220,53,69,1)'
        }, 'NORMAL': {
            backgroundColor: 'rgba(40,167,69,0.5)',
            borderColor: 'rgba(40,167,69,1)'
        }, 'VULNERABLE': {
            backgroundColor: 'rgba(0,123,255,0.5)',
            borderColor: 'rgba(0,123,255,0.7)',
        }, 'CRITICAL/VULNERABLE': {
            backgroundColor: 'rgba(255,193,7,0.5)',
            borderColor: 'rgba(255,193,7,0.7)'
        }
    }
}]
`
import CodeHighlighter from '../../components/syntextHighlighter/CodeHighlighter';

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
