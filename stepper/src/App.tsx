import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import UserDetail from "./Component/UserDetail";
import RoutePath from "./Component/RoutePaths";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoutePath />}>
            <Route index element={<Home />} />
            <Route path="user-Detail" element={<UserDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
