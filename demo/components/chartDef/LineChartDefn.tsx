import Grid from "../grid/Grid";
import { DatasetProperties } from "../grid/Types"
import { style } from "./BarChartDefn";
import { accessor, accessorDes } from "./Options";
import { LineImportSetup } from "./import/Import";

const LineChartDefn = () => {

    const data: DatasetProperties = [
        { property: 'endPoint *', type: 'string', description: 'The API url of the chart' },
        { property: 'onPointClick', type: 'Function', description: 'Click the point to get data' },
        {
            property: 'style', type: style(),
            description: 'This property is used to applied the style for chart. If not assign style, random colors will assign'
        },
        { property: 'chartOptions', type: 'Chart js Options', description: 'Chart Options are same as chart.js library options' },
        { property: 'plugins', type: '', description: '' },
        { property: 'accessor', type: accessor(), description: accessorDes() }
    ]

    return (
        <div className="chart-container">
            <Grid data={data} header="# Line Chart Api" import={LineImportSetup} />
        </div>
    )

}

export default LineChartDefn;