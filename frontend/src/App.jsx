import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import {io} from "socket.io-client"
function App() {
  const socket = io("http://localhost:3000")
  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
