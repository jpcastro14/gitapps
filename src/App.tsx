import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedLayout } from "./Components/ProtectedLayout";
import MainComponent from "./Components/MainComponent";
import { UserProvider } from "./DataContext/UserContext";
import { ContractsComponent } from "./Components/MainComponent/ContractsComponent";

function App() {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<ProtectedLayout children={<MainComponent />} />}
              />
              <Route
                path="/contratos"
                element={<ProtectedLayout children={<ContractsComponent />} />}
              />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </AuthProvider>
    </>
  );
}

export default App;
