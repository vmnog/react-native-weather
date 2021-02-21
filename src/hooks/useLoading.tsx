import React, { createContext, useContext, useState } from 'react';

interface LoadingContextData {
  loading: boolean;
  setLoading: Function;
}

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
);

export const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextData => {
  return useContext(LoadingContext);
};
