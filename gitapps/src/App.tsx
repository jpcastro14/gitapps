import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedLayout } from "./Components/ProtectedLayout";
import MainComponent from "./Components/MainComponent";
import { UserProvider } from "./DataContext/UserContext";
import TodoApp from "./Components/TodoComponent";
import RecipeApp from "./Components/RecipeComponent";

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
                path="/todo"
                element={<TodoApp />}
              />
              <Route
                path="/recipe"
                element={<RecipeApp />}
              />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </AuthProvider>
    </>
  );
}

export default App;
