import { createContext } from "react";
import { StoreFactory } from "palmyra-wire";

const nullFactory: any = null;
const ChartStoreFactoryContext = createContext<StoreFactory<any>>(nullFactory);

export { ChartStoreFactoryContext };