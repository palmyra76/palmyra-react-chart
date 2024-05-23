const Component = `<SimpleChart 
     type="Bar"
     endPoint={'/simple/barchartData/barKeyValueData.json'} 
     styleOptions={chartStyle}
     chartOptions={chartOptions}
     plugins={[ChartDataLabels]}
     accessorOptions={{ xKey: 'Name', yKey: 'Count', xLabel: 'Name', yLabel: 'Count', sourceType: "KeyValue" }} 
/>
`;
const apiResponse = `{
    "result": {
        "January": 2,
        "February": 7,
        "March": 6,
        "April": 4
    }
}
`

const styles = `const chartStyle: StyleOptions = [{
    props: {
        borderWidth: 2,
        borderThickness: 20
    },
    style: {
        'January': {
            backgroundColor: 'rgba(220,53,69,0.5)',
            borderColor: 'rgba(220,53,69,1)'
        }, 'February': {
            backgroundColor: 'rgba(40,167,69,0.5)',
            borderColor: 'rgba(40,167,69,1)'
        }, 'March': {
            backgroundColor: 'rgba(0,123,255,0.5)',
            borderColor: 'rgba(0,123,255,0.7)',
        }, 'April': {
            backgroundColor: 'rgba(255,193,7,0.5)',
            borderColor: 'rgba(255,193,7,0.7)'
        }
    }
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
