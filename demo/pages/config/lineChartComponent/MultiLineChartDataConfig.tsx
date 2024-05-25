import CodeHighlighter from '../../../components/syntextHighlighter/CodeHighlighter';

const arrayChartData = `[
    {
        "count": 8,
        "min": 4,
        "name": "January"
    },
    {
        "count": 4,
        "min": 6,
        "name": "February"
    },
    {
        "count": 6,
        "min": 9,
        "name": "March"
    },
    {
        "count": 3,
        "min": 9,
        "name": "April"
    }
]
`;


const keyedObjectChartData = `{
    "January": {
        "count": 7,
        "min": 5
    },
    "February": {
        "count": 5,
        "min": 7
    },
    "March": {
        "count": 8,
        "min": 3
    },
    "April": {
        "count": 4,
        "min": 2
    }
}
`;

const keylessObjectData = `{
    "one": {
        "count": 5,
        "min": 4,
        "name": "January"
    },
    "two": {
        "count": 10,
        "min": 8,
        "name": "February"
    },
    "three": {
        "count": 8,
        "min": 6,
        "name": "March"
    },
    "four": {
        "count": 4,
        "min": 5,
        "name": "April"
    }
}
`;

const arrayDataConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={arrayChartData} showLineNumbers />
        </div>
    )
}

const KeyedObjectChartDataConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={keyedObjectChartData} showLineNumbers />
        </div>
    )
}

const KeylessObjectChartDataConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={keylessObjectData} showLineNumbers />
        </div>
    )
}

export { arrayDataConfig, KeyedObjectChartDataConfig, KeylessObjectChartDataConfig }