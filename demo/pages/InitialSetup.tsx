import TabX from "../components/tab/TabX";
import CodeHighlighter from "../components/syntextHighlighter/CodeHighlighter"


const ChartStoreInterface = `interface ChartStore<T> {
  query(request: QueryRequest): Promise<T[]>;
}`;


const chartStoreFactoryInterface = `class AppStoreFactory implements ChartStoreFactory<any> {
  getChartStore(request: Record<string, string>, endPoint:IEndPoint): ChartStore<any> {
      return new MyChartStore(request, endPoint);
  }
}`;


const CustomChartStore = `
import { AxiosRequestConfig } from "axios";
import { ChartStore, PalmyraAbstractStore, QueryRequest, IEndPoint, QueryParams } from "palmyra-wire";

class MyChartStore extends PalmyraAbstractStore implements ChartStore<any>{
        
    constructor(request: Record<string, string>, endPoint: IEndPoint) {
        super(request, endPoint);        
    }

    query(request: QueryRequest): Promise<any> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (this.convertQueryParams(request));
        const params = { params: urlSortParams };
        return this.getClient().get(url, params)
            .then(response => { return response.data?.result })
            .catch(error => {this.handleError(error, request)});
    }

    convertQueryParams(queryParams: QueryParams):AxiosRequestConfig<any> {
        // Write your own logic to convert Query Params to AxiosRequestConfig
        return {}
    }
}

export { MyChartStore };
`;

// const ArrayComponent = ` <BarChart
//     endPoint={'/api/expense/byVendor'}
//     onPointClick={(d) => OpenDetails(d)}
//     style={arrayChartStyle}  storeFactory={storeFactory}
//     chartOptions={chartOptions}
//     plugins={[ChartDataLabels]}
//     accessor={{
//         xKey: 'name', yKey: 'count', yLabel: 'Data Set', sourceType: "Array"}
//      }} />
// `;

const chartStoreChild = () => <div className="config-container">
  <CodeHighlighter code={ChartStoreInterface} showLineNumbers />
</div>;
const exampleImplChild = () => <><div className="config-container">
  <CodeHighlighter code={CustomChartStore} showLineNumbers />
</div></>;

const npmInstallCommand = `npm i palmyra76/palmyra-wire  --save
npm i palmyra76/palmyra-react-chart --save`;

function InitialSetup() {

  return (
    <div>
      Add the dependency <br />
      <div className="config-container">
          <CodeHighlighter code={npmInstallCommand} showLineNumbers />
        </div>
      <br /><br />
      <div>
        1. Define the store to fetch the server data by implementing the interface ChartStore. <br />
        An example implementation using axios and available abstract store is available for reference.
        <div className="config-container">
          <TabX labels={['ChartStore', 'Example Implementation']} Children={[chartStoreChild, exampleImplChild]} />
        </div>

        <br />

        2. Create a storeFactory with the defined store
        <div className="config-container">
          <CodeHighlighter code={chartStoreFactoryInterface} showLineNumbers />
        </div>


        <br />
        3. Start using the Charts --- Checkout Examples / APIs       
        <br />
      </div>
    </div>
  )
}

export { InitialSetup }
