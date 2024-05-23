const Component = `<SimpleChart 
     type="Bar" 
     endPoint={'/simple/barchartData/barObjectChartData.json'}
     chartOptions={chartOptions}
     plugins={[ChartDataLabels]} 
     styleOptions={arrayChartStyle}
     accessorOptions={{ xKey: 'name', yKey: 'count', sourceType: "Object" }} 
/>
`;
const apiResponse = `{
    "result": {
        "one": {
            "count": 5,
            "name": "January"
        },
        "two": {
            "count": 10,
            "name": "February"
        },
        "three": {
            "count": 8,
            "name": "March"
        },
        "four": {
            "count": 4,
            "name": "April"
        }
    }
}
`

const styles = `const arrayChartStyle: StyleOptions = [{
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
