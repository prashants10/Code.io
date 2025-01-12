import { Routes, Route } from "react-router-dom";
import CreateProject from "../pages/CreateProject";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateProject />} />
    </Routes>
  );
};

export default MainRoutes;
