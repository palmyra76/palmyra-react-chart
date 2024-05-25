import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter"


const arrayStyle = `const lineChartStyle: IDatasetStyleOptions = {
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)'
    }]
}
`;

const namedStyle = `

`;

const ArrayStyleConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={arrayStyle} showLineNumbers />
        </div>
    )
}

const NamedStyleConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={namedStyle} showLineNumbers />
        </div>
    )
}

export { ArrayStyleConfig, NamedStyleConfig }