import Login from "./pages/login";
import Nav from "./components/Nav";
import Chat from "./pages/Chat";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
function App() {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}
export default App;