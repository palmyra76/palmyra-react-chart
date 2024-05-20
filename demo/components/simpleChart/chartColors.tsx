const barChart = {
    'CRITICAL': {
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)',
        borderWidth: 2
    }, 'NORMAL': {
        backgroundColor: 'rgba(40,167,69,0.5)',
        borderColor: 'rgba(40,167,69,1)',
        borderWidth: 2
    }, 'VULNERABLE': {
        backgroundColor: 'rgba(0,123,255,0.5)',
        borderColor: 'rgba(0,123,255,0.7)',
        borderWidth: 2,
        hidden: true,
    }, 'CRITICAL/VULNERABLE': {
        backgroundColor: 'rgba(255,193,7,0.5)',
        borderColor: 'rgba(255,193,7,0.7)',
        borderWidth: 2
    }
}


const barArrayChart = [{
    backgroundColor: 'rgba(220,53,69,0.5)',
    borderColor: 'rgba(220,53,69,1)',
    borderWidth: 2
}, {
    backgroundColor: 'rgba(255,193,7,0.5)',
    borderColor: 'rgba(255,193,7,0.7)',
    borderWidth: 2
}, {
    backgroundColor: 'rgba(0,123,255,0.5)',
    borderColor: 'rgba(0,123,255,0.7)',
    borderWidth: 2
}, {
    backgroundColor: 'rgba(40,167,69,0.5)',
    borderColor: 'rgba(40,167,69,1)',
    borderWidth: 2
}
]

export { barChart, barArrayChart };