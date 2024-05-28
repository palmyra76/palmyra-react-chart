import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter"


const arrayStyle = `const groupedArrayStyle: StyleOptions = [{
    props: {
        borderWidth: 2
    },
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)',
        hoverBackgroundColor: 'rgba(20,53,69,0.5)',
    }
    ]
},
{
    props: {
        borderWidth: 2
    },
    style: [{
        backgroundColor: 'rgba(255,193,7,0.5)',
        borderColor: 'rgba(255,193,7,0.7)',
        hoverBackgroundColor: 'rgba(120,53,69,0.5)'
    }
    ]
},
{
    props: {
        borderWidth: 2
    },
    style: [{
        backgroundColor: 'rgba(40,167,69,0.5)',
        borderColor: 'rgba(40,167,69,1)'
    }
    ]
},
{
    props: {
        borderWidth: 2
    },
    style: [{
        backgroundColor: 'rgba(0,123,255,0.5)',
        borderColor: 'rgba(0,123,255,0.7)'
    }
    ]
}]
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