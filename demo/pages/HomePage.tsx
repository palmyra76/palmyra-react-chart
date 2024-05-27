import { PalmyraStoreFactory } from "palmyra-wire";
import { BarChart } from "../../src/palmyra/react/chart/BarChart";
import CodeHighlighter from "../components/syntextHighlighter/CodeHighlighter";
import TabX from "../components/tab/TabX";
import ChartToastify from "../components/simpleChart/ChartToastify";

const chartOptions: any = {
  maintainAspectRatio: false,
  responsive: true,
  // indexAxis: 'y',
  plugins: {
    title: {
      text: "Bar Chart",
      display: true
    },
    legend: {
      position: 'top'
    },
    datalabels: { // datalabels style
      anchor: 'end',
      align: 'end',
      offset: -4
    },
  },
  scales: {
    x: {
      grid: {
        display: true
      }
    },
    y: {
      grid: {
        display: true
      }
    }
  },
  barThickness: 70
};


const ArrayComponent = `<BarChart storeFactory={storeFactory}
onPointClick={(d) => ChartToastify(d)}
endPoint={'/simple/chartData/arrayData.json'}
chartOptions={chartOptions}
accessor={{
  xKey: 'name', yKey: 'count', yLabel: 'Data Set'
}} />
`;



const ArrayComponentSetup = () => {
  return (
    <div className="config-container">
      <CodeHighlighter code={ArrayComponent} showLineNumbers />
    </div>
  )
}


function HomePage() {

  const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

  return (
    <div>
      <div>
        1. Abstract the Server/REST communication to fetch the server data.
        <br />
        2. Automated Data Conversion from REST data to ChartJS
        <br />
        3. Easy to use callbacks for User Interaction.
        <br />
      </div>
      <BarChart storeFactory={storeFactory}
        onPointClick={(d) => ChartToastify(d)}
        endPoint={'/simple/chartData/arrayData.json'}
        chartOptions={chartOptions}
        accessor={{
          xKey: 'name', yKey: 'count', yLabel: 'Data Set', sourceType: "Array"
        }} />

      <TabX labels={['Setup']} Children={[ArrayComponentSetup]} />
    </div>
  )
}

export default HomePage
