import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();
export default AppContext;

export const AppProvider = ({ children }) => {
  const [topic, setTopic] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [division, setDivision] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [username, setUsername] = useState(null);

  const validate_token = () => {
    const access = Cookies.get("access" || "");
    const currentTime = Date.now() / 1000;
    if (access == undefined) {
      setIsLogin(false);
      setIsAuthenticated(false);
      console.log("undefined");
    } else {
      const decoded_token = jwt_decode(access);
      if (decoded_token.exp < currentTime) {
        console.log("Token expired");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
        const name =
          decoded_token[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
          ];

        setUsername(name);
        console.log("Access granted");
      }
    }
  };

  const data_context = {
    topic,
    setTopic,
    answers,
    setAnswers,
    setDivision,
    division,
    isLogin,
    isLogout,
    isAuthenticated,
    setIsAuthenticated,
    validate_token,
    setUsername,
    username,
  };

  return (
    <AppContext.Provider value={data_context}>{children}</AppContext.Provider>
  );
};
