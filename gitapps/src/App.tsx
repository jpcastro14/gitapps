import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedLayout } from "./Components/ProtectedLayout";
import MainComponent from "./Components/MainComponent";
import { ClientsComponent } from "./Components/MainComponent/ClientsComponent";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<ProtectedLayout children={<MainComponent />} />}
            />
            <Route path="/clients" element={<ClientsComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
