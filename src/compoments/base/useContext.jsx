import React, { createContext, useContext, useState } from 'react';

const MyEditorContext = createContext();

export const MyEditorProvider = ({ children }) => {
  const [content, setContent] = useState('');

  return (
    <MyEditorContext.Provider value={{ content, setContent }}>
      {children}
    </MyEditorContext.Provider>
  );
};

export const useMyEditorContext = () => {
  return useContext(MyEditorContext);
};
