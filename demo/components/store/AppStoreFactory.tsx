import { ChartStoreFactory } from "palmyra-wire";
import { ChartStore } from "palmyra-wire"
import { DummyChartStore } from "./DummyChartStore";


class AppStoreFactory implements ChartStoreFactory<any> {
    getChartStore(request: Record<string, string>): ChartStore<any> {
        return new DummyChartStore(request);
    }
}

export { AppStoreFactory };