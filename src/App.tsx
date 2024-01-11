import "./App.css";
import NavBar from "./components/ui/Navbar/Navbar";
import { AuthProvider } from "./components/contexts/AuthContext";
import MainRouter from "./components/routes/MainRouter";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <MainRouter />
    </AuthProvider>
  );
}

export default App;
