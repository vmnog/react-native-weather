import React, { createContext, useContext, useState } from 'react';

interface ErrorsContextData {
  hasErrors: boolean;
  setErrors: Function;
}

const ErrorsContext = createContext<ErrorsContextData>(
  {} as ErrorsContextData
);

export const ErrorsProvider: React.FC = ({ children }) => {
  const [hasErrors, setErrors] = useState(false);

  return (
    <ErrorsContext.Provider
      value={{
        hasErrors,
        setErrors,
      }}
    >
      {children}
    </ErrorsContext.Provider>
  );
};

export const useErrors = (): ErrorsContextData => {
  return useContext(ErrorsContext);
};
