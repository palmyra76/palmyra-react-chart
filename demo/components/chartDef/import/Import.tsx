import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter"

const lineImport = `import { LineChart } from "palmyra/LineChart"`

const barImport = `import { BarChart } from "palmyra/BarChart"`

const LineImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={lineImport} showLineNumbers />
        </div>
    )
}

const BarImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={barImport} showLineNumbers />
        </div>
    )
}

export { LineImportSetup, BarImportSetup }