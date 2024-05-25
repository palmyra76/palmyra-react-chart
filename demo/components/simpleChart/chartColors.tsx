import { IDatasetStyleOptions, StyleOptions } from "../../../src/lib";


const namedChartStyles: StyleOptions = [{
    props: {
        borderWidth: 2
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

const arrayChartStyles: StyleOptions = [{
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

const namedChartStyle: IDatasetStyleOptions = {
    props: {
        borderWidth: 2
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
}

const arrayChartStyle: IDatasetStyleOptions = {
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
}
const groupedBarChartStyle = [{
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

const groupedArrayStyle: StyleOptions = [{
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


const groupedNamedStyle: StyleOptions = [{
    props: {
        borderWidth: 2
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



// const lineChart: StyleOptions = [{
//     style: {
//         'CRITICAL': {
//             borderColor: 'rgba(220,53,69,1)'
//         }, 'NORMAL': {
//             borderColor: 'rgba(40,167,69,1)'
//         }, 'VULNERABLE': {
//             borderColor: 'rgba(0,123,255,0.7)',
//         }, 'CRITICAL/VULNERABLE': {
//             borderColor: 'rgba(255,193,7,0.7)'
//         }
//     }
// }]

const lineChart: StyleOptions = [{
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)'
    }]
}]

const lineChartStyle: IDatasetStyleOptions = {
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)'
    }]
}

const MultiLineChart: StyleOptions = [{
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)'
    },
    {
        backgroundColor: 'rgba(255,193,7,0.5)',
        borderColor: 'rgba(255,193,7,0.7)'
    }]
}]

const MultiLineNamedChart: StyleOptions = [{
    style: {
        // 'CRITICAL': {
        //     // backgroundColor: 'rgba(220,53,69,0.5)',
        //     borderColor: 'rgba(220,53,69,1)'
        // }, 'NORMAL': {
        //     // backgroundColor: 'rgba(40,167,69,0.5)',
        //     borderColor: 'rgba(40,167,69,1)'
        // }, 'VULNERABLE': {
        //     // backgroundColor: 'rgba(0,123,255,0.5)',
        //     borderColor: 'rgba(0,123,255,0.7)',
        // }, 'CRITICAL/VULNERABLE': {
        //     // backgroundColor: 'rgba(255,193,7,0.5)',
        //     borderColor: 'rgba(255,193,7,0.7)'
        // }
        "count": {
            borderColor: 'rgba(220,53,69,1)'
        },
        "min": {
            borderColor: 'rgba(40,167,69,1)'
        }
    }
}]



export {
    namedChartStyles, arrayChartStyles, namedChartStyle, arrayChartStyle,
    groupedArrayStyle, lineChart, MultiLineChart, MultiLineNamedChart,
    lineChartStyle, groupedBarChartStyle, groupedNamedStyle
};