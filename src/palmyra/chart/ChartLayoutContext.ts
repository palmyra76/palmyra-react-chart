import { createContext } from "react";
import { ChartStoreFactory } from "palmyra-wire";

const nullFactory: any = null;
const ChartStoreFactoryContext = createContext<ChartStoreFactory<any>>(nullFactory);

export { ChartStoreFactoryContext };