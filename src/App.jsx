import "./App.css";
import { AllRoutes } from "./Components/Pages/AllRoutes";
import { Navbar } from "./Components/Pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
