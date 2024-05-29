import Grid from "../grid/Grid";
import { DatasetProperties } from "../grid/Types"
import { style } from "./BarChartDefn";
import { multiLineAccessor, multiLineAccessorDes } from "./Options";
import { MultiLineImportSetup } from "./import/Import";

const MultiLineChartDefn = () => {

    const data: DatasetProperties = [
        { property: 'endPoint *', type: 'string', description: 'The API url of the chart' },
        { property: 'onPointClick', type: 'Function', description: 'Click the point to get data' },
        {
            property: 'style', type: style({ type: "line" }),
            description: 'This property is used to apply the style to the chart. If no style is assigned, random colors will be assigned.'
        },
        { property: 'chartOptions', type: 'Chart js Options', description: 'Chart Options are same as chart.js library options' },
        { property: 'plugins', type: '', description: '' },
        { property: 'accessor', type: multiLineAccessor(), description: multiLineAccessorDes() }
    ]

    return (
        <div className="chart-container">
            <Grid data={data} header="# Multi Line Chart Api" import={MultiLineImportSetup} />
        </div>
    )

}

export default MultiLineChartDefn;