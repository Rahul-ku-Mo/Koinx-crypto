import { BrowserRouter } from "react-router-dom";
import { CryptoCoinContextProvider } from "./context/CryptoCoinContext";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <CryptoCoinContextProvider>
        <LandingPage />
      </CryptoCoinContextProvider>
    </BrowserRouter>
  );
};

export default App;
