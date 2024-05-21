import { StyleOptions } from "../../../src/lib";

const barChart: StyleOptions = {
    type: "Named",
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
}


const barArrayChart: StyleOptions = {
    type: "Array",
    props: [{
        borderWidth: 7
    }],
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)',
        hoverBackgroundColor: 'rgba(20,53,69,0.5)',
    }, {
        backgroundColor: 'rgba(255,193,7,0.5)',
        borderColor: 'rgba(255,193,7,0.7)',
        hoverBackgroundColor: 'rgba(120,53,69,0.5)'
    }, {
        backgroundColor: 'rgba(0,123,255,0.5)',
        borderColor: 'rgba(0,123,255,0.7)'
    }, {
        backgroundColor: 'rgba(40,167,69,0.5)',
        borderColor: 'rgba(40,167,69,1)'
    }
    ]
}

export { barChart, barArrayChart };