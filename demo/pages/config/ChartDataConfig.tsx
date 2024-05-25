import CodeHighlighter from '../../components/syntextHighlighter/CodeHighlighter';

const arrayChartData = `[
    {
        "count": 5,
        "name": "jan"
    },
    {
        "count": 8,
        "name": "feb"
    },
    {
        "count": 2,
        "name": "March"
    },
    {
        "count": 4,
        "name": "April"
    }
]
`;

const keyValueChartData = `{
    "January": 2,
    "February": 7,
    "March": 1,
    "April": 4
}
`;

const keyedObjectChartData = `{
    "January": {
        "count": 5
    },
    "February": {
        "count": 10
    },
    "March": {
        "count": 3
    },
    "April": {
        "count": 4
    }
}
`;

const keylessObjectData = `{
    "one": {
        "count": 5,
        "name": "January"
    },
    "two": {
        "count": 10,
        "name": "February"
    },
    "three": {
        "count": 4,
        "name": "March"
    },
    "four": {
        "count": 4,
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

const KeyValueChartDataConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={keyValueChartData} showLineNumbers />
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

export { arrayDataConfig, KeyValueChartDataConfig, KeyedObjectChartDataConfig, KeylessObjectChartDataConfig }