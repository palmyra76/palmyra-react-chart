import CodeHighlighter from '../../components/syntextHighlighter/CodeHighlighter';

const arrayChartData = `[
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
]`

const keyValueChartData = `{
    "result": {
        "January": 2,
        "February": 7,
        "March": 6,
        "April": 4
    }
}
`

const keyedObjectChartData = `{
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

const keylessObjectData = `{
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