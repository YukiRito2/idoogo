import { BrowserRouter } from "react-router-dom";
import ClientRoutes from "./app/routes/ClientRoutes";

function App() {
  return (
    <BrowserRouter>
      <ClientRoutes />
    </BrowserRouter>
  );
}

export default App;
