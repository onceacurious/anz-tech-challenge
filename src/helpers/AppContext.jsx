import { createContext, useState } from "react";

const AppContext = createContext();
export default AppContext;

export const AppProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [answers, setAnswers] = useState([]);

  const data_context = {
    issues,
    setIssues,
    answers,
    setAnswers,
  };

  return (
    <AppContext.Provider value={data_context}>{children}</AppContext.Provider>
  );
};
