// First we have to import the following things from react:
import { createContext, useContext, useReducer } from "react";

// Below is the reducer method which is imported from the following location:
import { transactionReducer } from "./reducer";

// Then here, we create context which is essential for working around the context api:
const TransactionsContext = createContext([]);
const DispatchContext = createContext(null);

// Below is the method which provides the states and reducer method to the component tree:
export const TransactionsProvider = ({ children }) => {
  
  // The following line is the syntax of using useReducer Hook in react:
  // The transactions = state --> you can give any name to state
  const [transactions, dispatch] = useReducer(transactionReducer, []);
  
  return (
    <TransactionsContext.Provider value={transactions}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionsContext);
export const useTransactionsDispatch = () => useContext(DispatchContext);
