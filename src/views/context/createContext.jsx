import { createContext } from "react";

const ConContext = createContext();
const { Provider, Consumer } = ConContext;

export { ConContext, Provider, Consumer };
