import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";
import { createContext, useState } from "react";
import { Template, defaultTemplate } from "./data/Templates";

const AppRoot = styled.div`
  display: block;
  min-height: 100vh;
  background-color: #fafafa;
`;
export const GlobalContext = createContext<any>(null);

export type globalContextTypes = {
  currentTemplate: Template;
  setcurrentTemplate: React.Dispatch<React.SetStateAction<Template>>;
};

function App() {
  const [currentTemplate, setcurrentTemplate] = useState({
    ...defaultTemplate,
  });

  const globalContextValues: globalContextTypes = {
    currentTemplate,
    setcurrentTemplate,
  };
  return (
    <GlobalContext.Provider value={globalContextValues}>
      <BrowserRouter>
        <AppRoot>
          <Header />
          <Content />
          {/* <Footer /> */}
        </AppRoot>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
