import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import AddUser from "./user/AddUser";
import EditUser from "./user/EditUser";
import ViewUser from "./user/ViewUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/view-user/:id" element={<ViewUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
