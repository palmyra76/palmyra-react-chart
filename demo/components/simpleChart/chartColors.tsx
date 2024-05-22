import { StyleOptions } from "../../../src/lib";


const barChart: StyleOptions = [{
    props: {
        borderWidth: 3
    },
    style: {
        'CRITICAL': {
            backgroundColor: 'rgba(220,53,69,0.5)',
            borderColor: 'rgba(220,53,69,1)'
        }, 'NORMAL': {
            backgroundColor: 'rgba(40,167,69,0.5)',
            borderColor: 'rgba(40,167,69,1)'
        }, 'VULNERABLE': {
            backgroundColor: 'rgba(0,123,255,0.5)',
            borderColor: 'rgba(0,123,255,0.7)',
        }, 'CRITICAL/VULNERABLE': {
            backgroundColor: 'rgba(255,193,7,0.5)',
            borderColor: 'rgba(255,193,7,0.7)'
        }
    }
}]

const barArrayChart: StyleOptions = [{
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


const groupedBarChart: StyleOptions = [{
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
        'CRITICAL': {
            backgroundColor: 'rgba(220,53,69,0.5)',
            // borderColor: 'rgba(220,53,69,1)'
        }, 'NORMAL': {
            backgroundColor: 'rgba(40,167,69,0.5)',
            // borderColor: 'rgba(40,167,69,1)'
        }, 'VULNERABLE': {
            backgroundColor: 'rgba(0,123,255,0.5)',
            // borderColor: 'rgba(0,123,255,0.7)',
        }, 'CRITICAL/VULNERABLE': {
            backgroundColor: 'rgba(255,193,7,0.5)',
            // borderColor: 'rgba(255,193,7,0.7)'
        }
    }
}]



export { barChart, barArrayChart, groupedBarChart, lineChart, MultiLineChart, MultiLineNamedChart };