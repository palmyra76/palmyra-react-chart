const Component = `<SimpleChart 
     type="Bar" 
     endPoint={'/simple/barchartData/barKeyedObjectData.json'}
     styleOptions={barArrayChart}
     chartOptions={chartOptions}
     plugins={[ChartDataLabels]}
     accessorOptions={{ yKey: 'count', sourceType: "Object" }} 
/>
`;
const apiResponse = `{
    "result": {
        "CRITICAL": {
            "count": 5
        },
        "CRITICAL/VULNERABLE": {
            "count": 10
        },
        "VULNERABLE": {
            "count": 8
        },
        "NORMAL": {
            "count": 4
        }
    }
}
`

const styles = `const barArrayChart: StyleOptions = [{
    props: {
        borderWidth: 2
    },
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)',
        hoverBackgroundColor: 'rgba(220,53,69,0.3)',
    }, {
        backgroundColor: 'rgba(255,193,7,0.5)',
        borderColor: 'rgba(255,193,7,0.7)',
        hoverBackgroundColor: 'rgba(255,193,7,0.3)'
    }, {
        backgroundColor: 'rgba(0,123,255,0.5)',
        borderColor: 'rgba(0,123,255,0.7)',
        hoverBackgroundColor: 'rgba(0,123,255,0.3)'
    }, {
        backgroundColor: 'rgba(40,167,69,0.5)',
        borderColor: 'rgba(40,167,69,1)',
        hoverBackgroundColor: 'rgba(40,167,69,0.3)'
    }
    ]
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
