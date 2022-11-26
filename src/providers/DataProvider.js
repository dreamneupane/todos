import React, { useState, createContext, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({children})=> {
  const [data,setData] = useState();
  const contextValue = {data, setData};
  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  )
}



